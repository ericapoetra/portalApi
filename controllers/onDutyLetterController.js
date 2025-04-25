const { Sequelize, Op, where } = require("sequelize");
const {
  EmployeeView,
  TCLTREQUEST,
  TTADONDUTYREQUEST,
  TTADONDUTYREQUESTDTL,
  TTAMODDESTINATION,
  TEOMCOMPANY,
  TTAMONDUTYPURPOSETYPE,
  sequelize,
} = require("../models");

const getOnDutyLetter = async (req, res) => {
  const { request_no } = req.body;

  try {

    if(!request_no || !request_no.includes('ODR')){
      return res.status(400).json({
        message: "Tidak dapat diproses karena Request Nomor ini bukan untuk On Duty",
      });
    }

    const checkApproval = await TCLTREQUEST.findOne({
      where: {
        req_no: request_no,
      },
      attributes: ["approval_list", "approved_list"],
    });

    if(!checkApproval){
      return res.status(404).json({
        message: "Data On Duty tidak ditemukan",
      });
    }

    const approvalArray = checkApproval.approval_list.split(",");
    const approvedArray = checkApproval.approved_list.split(",");

    if (
      approvalArray.length !== approvedArray.length ||
      !approvalArray.every((item, index) => item === approvedArray[index])
    ) {
      return res.status(400).json({
        message: "On Duty ini belum fully approved",
      });
    }

    const onduty = await TTADONDUTYREQUEST.findOne({
      where: {
        request_no: request_no,
      },
      include: [
        {
          model: TTADONDUTYREQUESTDTL,
          as: "detail_onduty",
          include: [
            {
              model: TTAMODDESTINATION,
              as: "TTAMODDESTINATION",
              attributes: [],
            },
          ],
          attributes: [
            "destination_no",
            [
              Sequelize.literal("[detail_onduty->TTAMODDESTINATION].[name_en]"),
              "destination_name",
            ],
            "startdate",
            "enddate",
            "location_code",
            "trans_code",
            "kelas",
            "waktu",
          ],
        },
        {
          model: EmployeeView,
          as: "detail_employee",
          include: [
            {
              model: TEOMCOMPANY,
              attributes: [],
            },
          ],
          attributes: [
            "emp_no",
            "full_name",
            [
              Sequelize.literal(
                "[detail_employee->TEOMCOMPANY].[company_name]"
              ),
              "company_name",
            ],
            "cost_code",
            "businessarea_code",
            "pos_name_en",
          ],
        },
        {
          model: TCLTREQUEST,
          as: "detail_approval",
          attributes: [],
        },
        {
          model: TTAMONDUTYPURPOSETYPE,
          attributes: [],
        },
      ],
      attributes: [
        "ondutyletter_no",
        "request_no",
        [
          Sequelize.col("[TTAMONDUTYPURPOSETYPE].[purpose_name_en]"),
          "purpose_onduty",
        ],
        "remark",
        "cost_code",
        [Sequelize.col("[detail_approval].[approved_data]"), "approval_list"],
      ],
    });

    let result = null;

    if (onduty) {
      const raw = onduty.get({ plain: true });

      const FlowApproval = JSON.parse(raw.approval_list || "{}");

      const approvalOrder = Object.keys(FlowApproval)
        .map((key) => {
          const [prefix, user_id] = key.split("_");
          if (!prefix || isNaN(parseInt(prefix)) || !user_id) return null;
          return {
            order: parseInt(prefix),
            user_id,
          };
        })
        .filter((item) => item != null);

      if (approvalOrder.length === 0) {
        return res.status(400).json({
          message:
            "Data tidak dapat ditampilkan karena flow approval tidak ada",
        });
      }

      const sortedApproval = approvalOrder.sort((a, b) => a.order - b.order);

      const Emp_No = sortedApproval.map((item) => item.user_id);

      let listApproval = [];
      if (Emp_No.length > 0) {
        listApproval = await EmployeeView.findAll({
          where: {
            user_id: {
              [Op.in]: Emp_No,
            },
          },
          attributes: ["user_id", "emp_no", "full_name", "pos_name_en"],
        });

        const plainList = listApproval.map((e) => e.get({ plain: true }));

        listApproval = sortedApproval
          .map(({ user_id }) => {
            const emp = plainList.find((emp) => emp.user_id == user_id);
            if (emp) {
              const { user_id, ...cleaned } = emp;

              return cleaned;
            }
            return null;
          })
          .filter(Boolean);
      }

      result = {
        ...raw,
        approval_list: listApproval,
      };
    }

    res.status(200).json({ status: "Success", data: result });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

module.exports = { getOnDutyLetter };

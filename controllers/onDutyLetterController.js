const { Sequelize, Op } = require("sequelize");
const {
  EmployeeView,
  TCLTREQUEST,
  TTADONDUTYREQUEST,
  TTADONDUTYREQUESTDTL,
  TTAMODDESTINATION,
  sequelize,
} = require("../models");

const getOnDutyLetter = async (req, res) => {
  const { request_no } = req.body;

  try {
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
          attributes: [
            "emp_no",
            "full_name",
            "company_id",
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
      ],
      attributes: [
        "ondutyletter_no",
        "request_no",
        "purpose_code",
        "remark",
        "cost_code",
        [Sequelize.col("[detail_approval].[approved_list]"), "approved_list"],
        [Sequelize.col("[detail_approval].[approved_data]"), "flow_approval"],
      ],
    });

    let result = null;

    if (onduty) {
      const raw = onduty.get({ plain: true });

      const FlowApproval = JSON.parse(raw.flow_approval || "{}");

      const approvalOrder = Object.keys(FlowApproval)
            .map((key) => {
              const [prefix, user_id] = key.split("_");
              return {
                order: parseInt(prefix), user_id
              }
            })
            .sort((a,b) => a.order - b.order);

      const Emp_No = approvalOrder.map((item) => item.user_id);

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

        const plainList = listApproval.map((e) => e.get({plain: true}));

        listApproval = approvalOrder.map(({user_id}) => {
          const emp = plainList.find((emp) => emp.user_id == user_id)
          if(emp){
            const {user_id, ...cleaned} = emp;
            return cleaned;
          }
          return null;
        }).filter(Boolean);
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

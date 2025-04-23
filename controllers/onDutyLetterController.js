const { Sequelize } = require("sequelize");
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
    const onduty = await TTADONDUTYREQUEST.findAll({
      where: {
        request_no: request_no,
      },
      //   raw:true,
      include: [
        {
          model: TTADONDUTYREQUESTDTL,
          as: "detail_onduty",
          //   raw: true,
          include: [
            {
              model: TTAMODDESTINATION,
              //   attributes: [],
              as: "TTAMODDESTINATION",
              //   require: false,
              attributes: [],
            },
          ],
          attributes: [
            "destination_no",
            [
              Sequelize.literal("[detail_onduty->TTAMODDESTINATION].[name_en]"),
              "destination_name",
            ],
            // "destination_code",
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
        [
          Sequelize.col("[detail_approval].[approved_list]"),
          "approved_list",
        ],
      ],
    });

    // let listApproval = [];
    // const approvalListRaw = onduty?.approved_list;

    // if(approvalListRaw){
    //     const Emp_No = approvalListRaw.split(",").map((id) => id.trim());

    //     approvalEmp = await employeeview
    // }

    res.json(onduty);

    // let getApproval = onduty.map(data =>{
    //     return data.detail_employee.approved_list
    // })
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

module.exports = { getOnDutyLetter };

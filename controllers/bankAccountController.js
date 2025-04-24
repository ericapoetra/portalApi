const {
  TRMDREIMREQUEST,
  EmployeeView,
  CL_tblBu_aophcis,
  TEOMCOMPANY,
  TPYDEMPBANK,
} = require("../models");
const fs = require("fs");
const path = require("path");

const getBankAccount = async (req, res, next) => {
  let { perner, companyCode } = req.body;
  try {
    if (!perner || !companyCode) {
      res
        .status(400)
        .json({ message: "Employee Number / Company Code Required" });
    }

    let getCompanyId = await CL_tblBu_aophcis.findOne({
      where: { bu_code: companyCode },
      attributes: ["company_code_sunfish"],
    });
    if (!getCompanyId) {
      res.status(404).json({ message: "Wrong Company Code" });
    }
    let getEmployee = await EmployeeView.findOne({
      where: { emp_id: perner },
    });

    if (!getEmployee) {
      res.status(404).json({ message: "Employee Not Found" });
    }

    let getDataBank = await TPYDEMPBANK.findOne({ where: { emp_id: perner } });
    if (!getDataBank) {
      res.status(404).json({ message: "Bank Not Registered" });
    }

    let result = {
      name: getEmployee.full_name,
      bankAccount: getDataBank.bank_account,
      bankCode: getDataBank.bank_code,
      currency: getDataBank.currency_code,
    };

    res.status(200).json({ status: "Success", data: result });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getBankAccount };

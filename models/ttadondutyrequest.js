"use strict";

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class TTADONDUTYREQUEST extends Model {
    static associate(models) {
      // define association here
      TTADONDUTYREQUEST.hasMany(models.TTADONDUTYREQUESTDTL, {
        foreignKey: "request_no",
        as: "detail_onduty"
      });
      TTADONDUTYREQUEST.hasOne(models.EmployeeView, {
        foreignKey: "emp_id",
        sourceKey: "requestfor",
        as: "detail_employee"
      });
      TTADONDUTYREQUEST.hasOne(models.TCLTREQUEST,{
        foreignKey: "req_no",
        sourceKey: "request_no",
        as: "detail_approval"
      })
      TTADONDUTYREQUEST.belongsTo(models.TTAMONDUTYPURPOSETYPE,{
        foreignKey: "purpose_code",
        sourceKey: "purpose_code"
      })
    }
  }
  TTADONDUTYREQUEST.init(
    {
      request_no: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
      },
      company_id: DataTypes.INTEGER,
      requestedby: DataTypes.STRING,
      requestfor: DataTypes.STRING,
      requestdate: DataTypes.DATE,
      purpose_code: DataTypes.STRING,
      total_destination: DataTypes.INTEGER,
      remark: DataTypes.STRING,
      created_by: DataTypes.STRING,
      created_date: DataTypes.DATE,
      modified_by: DataTypes.STRING,
      modified_date: DataTypes.DATE,
      cancelsts: DataTypes.STRING,
      upload_filename: DataTypes.STRING,
      onduty_startdate: DataTypes.DATE,
      onduty_enddate: DataTypes.DATE,
      cost_code: DataTypes.STRING,
      ondutyletter_no: DataTypes.STRING,
      account_no: DataTypes.STRING,
      bank_name: DataTypes.STRING,
      account_name: DataTypes.STRING,
      paymentrequest_date: DataTypes.DATE,
      paid_status: DataTypes.INTEGER,
      budgetno: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "TTADONDUTYREQUEST",
      tableName: "TTADONDUTYREQUEST",
      timestamps: false,
    }
  );
  return TTADONDUTYREQUEST;
};

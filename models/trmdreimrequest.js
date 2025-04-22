"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class TRMDREIMREQUEST extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TRMDREIMREQUEST.init(
    {
      request_no: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
      },
      company_code: DataTypes.STRING,
      requestedby: DataTypes.STRING,
      requestfor: DataTypes.STRING,
      requestdate: DataTypes.DATE,
      reim_code: DataTypes.STRING,
      reim_startdate: DataTypes.DATE,
      reim_enddate: DataTypes.DATE,
      empfamily_id: DataTypes.STRING,
      currency_code: DataTypes.STRING,
      reimcost: DataTypes.DECIMAL,
      approvedcost: DataTypes.DECIMAL,
      remark: DataTypes.STRING,
      approval_status: DataTypes.INTEGER,
      paid_status: DataTypes.INTEGER,
      refdoc: DataTypes.STRING,
      approved_date: DataTypes.DATE,
      paid_date: DataTypes.DATE,
      created_by: DataTypes.STRING,
      created_date: DataTypes.DATE,
      modified_by: DataTypes.STRING,
      modified_date: DataTypes.DATE,
      reim_receiptdate: DataTypes.DATE,
      convertresult: DataTypes.DECIMAL,
      validcost: DataTypes.DECIMAL,
      currency_convert: DataTypes.STRING,
      costcenter_code: DataTypes.STRING,
      reimbalance_id: DataTypes.STRING,
      cancelsts: DataTypes.STRING,
      reqcancel_no: DataTypes.STRING,
      reimrequest_id: DataTypes.STRING,
      period_code: DataTypes.STRING,
      reim_source: DataTypes.STRING,
      gst_amount: DataTypes.DECIMAL,
      loss_comp: DataTypes.DECIMAL,
      loss_comp_percent: DataTypes.DECIMAL,
      exchange_rate: DataTypes.DECIMAL,
      gst_amount_approve: DataTypes.DECIMAL,
      note_approval: DataTypes.STRING,
      letter_no: DataTypes.STRING,
      cost_code: DataTypes.STRING,
      flag_req: DataTypes.STRING,
      flag_payreq: DataTypes.STRING,
      empfamily_name: DataTypes.STRING,
      empfamily_relationship: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "TRMDREIMREQUEST",
      tableName: "TRMDREIMREQUEST",
      timestamps: false,
    }
  );
  return TRMDREIMREQUEST;
};

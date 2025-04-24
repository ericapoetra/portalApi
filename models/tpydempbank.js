"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class TPYDEMPBANK extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TPYDEMPBANK.init(
    {
      empbank_id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      emp_id: DataTypes.STRING,
      bank_code: DataTypes.STRING,
      bank_account: DataTypes.STRING,
      account_name: DataTypes.STRING,
      currency_code: DataTypes.STRING,
      created_by: DataTypes.STRING,
      created_date: DataTypes.DATE,
      modified_by: DataTypes.STRING,
      modified_date: DataTypes.DATE,
      start_dt: DataTypes.DATE,
      end_date: DataTypes.DATE,
      end_date1: DataTypes.DATE,
      bank_end_date: DataTypes.DATE,
      attachment: DataTypes.STRING,
      is_default: DataTypes.TINYINT,
      email: DataTypes.STRING,
      empbank_attach: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "TPYDEMPBANK",
      tableName: "TPYDEMPBANK",
      timestamps: false, // disable timestamps if not using createdAt/updatedAt
    }
  );

  return TPYDEMPBANK;
};

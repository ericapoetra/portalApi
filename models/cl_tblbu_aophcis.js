"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class CL_tblBu_aophcis extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CL_tblBu_aophcis.init(
    {
      company_code_sunfish: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      bu_code: DataTypes.STRING,
      company_code_sap: DataTypes.STRING,
      pr_online: DataTypes.INTEGER,
      dashboard_time: DataTypes.INTEGER,
      rekimasi: DataTypes.INTEGER,
      company_short_name: DataTypes.STRING,
      ovt_massleave: DataTypes.STRING,
      shiftcode_off: DataTypes.STRING,
      absen_api: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      admin_absen: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "CL_tblBu_aophcis",
      tableName: "CL_tblBu_aophcis",
      timestamps: false, // karena tidak ada kolom createdAt/updatedAt
    }
  );
  return CL_tblBu_aophcis;
};

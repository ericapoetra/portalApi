"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class TTADONDUTYREQUESTDTL extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      TTADONDUTYREQUESTDTL.belongsTo(models.TTADONDUTYREQUEST, {
        foreignKey: "request_no",
        sourceKey:"request_no",
        uniqueKey:"request_no"
      });
      TTADONDUTYREQUESTDTL.belongsTo(models.TTAMODDESTINATION, {
        foreignKey: "destination_code",
        as: "TTAMODDESTINATION"
      });
    }
  }
  TTADONDUTYREQUESTDTL.init(
    {
      request_no: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
        unique:false
      },
      company_id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
      },
      destination_no: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
      },
      destination_code: DataTypes.STRING,
      startdate: DataTypes.DATE,
      enddate: DataTypes.DATE,
      location_code: DataTypes.STRING,
      trans_code: DataTypes.STRING,
      kelas: DataTypes.STRING,
      waktu: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "TTADONDUTYREQUESTDTL",
      tableName: "TTADONDUTYREQUESTDTL",
      timestamps: false,
    }
  );
  return TTADONDUTYREQUESTDTL;
};

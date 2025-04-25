"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class TTAMONDUTYPURPOSETYPE extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      TTAMONDUTYPURPOSETYPE.hasMany(models.TTADONDUTYREQUEST,{
        foreignKey: "purpose_code"
      })
    }
  }
  TTAMONDUTYPURPOSETYPE.init(
    {
      purpose_code: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
      },
      purpose_name_en: DataTypes.STRING,
      purpose_name_id: DataTypes.STRING,
      purpose_name_my: DataTypes.STRING,
      purpose_name_th: DataTypes.STRING,
      company_id: DataTypes.INTEGER,
      created_by: DataTypes.STRING,
      created_date: DataTypes.DATE,
      modified_by: DataTypes.STRING,
      modified_date: DataTypes.DATE,
      attend_code: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "TTAMONDUTYPURPOSETYPE",
      tableName: "TTAMONDUTYPURPOSETYPE",
    }
  );
  return TTAMONDUTYPURPOSETYPE;
};

'use strict';
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class TTAMODDESTINATION extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // TTAMODDESTINATION.belongsTo(models.TTADONDUTYREQUESTDTL, {foreignKey: 'code'})
      TTAMODDESTINATION.hasMany(models.TTADONDUTYREQUESTDTL, {
        foreignKey: "destination_code",
        sourceKey: "code",
        // as: "DetailOndutyList", // optional
      });
    }
  }
  TTAMODDESTINATION.init({
    code: {
      type: DataTypes.STRING,
      primaryKey: true,  
    },
    name_en: DataTypes.STRING,
    name_id: DataTypes.STRING,
    name_my: DataTypes.STRING,
    name_th: DataTypes.STRING,
    order_no: DataTypes.INTEGER,
    created_date: DataTypes.DATE,
    created_by: DataTypes.STRING,
    modified_date: DataTypes.DATE,
    modified_by: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'TTAMODDESTINATION',
    tableName: 'TTAMODDESTINATION',
    timestamps: false,
  });
  return TTAMODDESTINATION;
};
'use strict';
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class TCLTREQUEST extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      TCLTREQUEST.belongsTo(models.TTADONDUTYREQUEST,{
        foreignKey: "req_no",
        // sourceKey: "req_no",
      })
    }
  }
  TCLTREQUEST.init({
    seq_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    sfobject: DataTypes.STRING,
    company_id: DataTypes.INTEGER,
    company_code: DataTypes.STRING,
    req_type: DataTypes.STRING,
    req_mode: DataTypes.TINYINT,
    req_no: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    req_date: DataTypes.DATE,
    requester: DataTypes.INTEGER,
    reqemp: DataTypes.STRING,
    req_data: DataTypes.TEXT,
    key_data: DataTypes.STRING,
    status: DataTypes.TINYINT,
    isoutstanding: DataTypes.TINYINT,
    isselectable_approver: DataTypes.TINYINT,
    isexpired: DataTypes.TINYINT,
    isreroute: DataTypes.TINYINT,
    expiry_date: DataTypes.DATE,
    nstep_expiry_date: DataTypes.DATE,
    nspare_expiry_date: DataTypes.DATE,
    approval_list: DataTypes.STRING,
    approved_list: DataTypes.STRING,
    outstanding_list: DataTypes.STRING,
    email_list: DataTypes.STRING,
    approval_position_list: DataTypes.STRING,
    approval_data: DataTypes.TEXT,
    approved_data: DataTypes.TEXT,
    created_date: DataTypes.DATE,
    created_by: DataTypes.STRING,
    modified_date: DataTypes.DATE,
    modified_by: DataTypes.STRING,
    outstanding_listemail: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'TCLTREQUEST',
    tableName: 'TCLTREQUEST',
    timestamps: false
  });
  return TCLTREQUEST;
};
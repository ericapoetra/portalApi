"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class EmployeeView extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      EmployeeView.belongsTo(models.TTADONDUTYREQUEST, {
        foreignKey: "emp_id",
        // sourceKey: "emp_id",
      });
    }
  }
  EmployeeView.init(
    {
      emp_id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
      },
      first_name: DataTypes.STRING,
      middle_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      full_name: DataTypes.STRING,
      gender: DataTypes.STRING,
      user_id: DataTypes.STRING,
      taxno: DataTypes.STRING,
      geocoord: DataTypes.STRING,
      status: DataTypes.STRING,
      req_status: DataTypes.STRING,
      lastreqno: DataTypes.STRING,
      email: DataTypes.STRING,
      photo: DataTypes.STRING,
      phone: DataTypes.STRING,
      birthplace: DataTypes.STRING,
      birthdate: DataTypes.DATE,
      maritalstatus: DataTypes.STRING,
      address: DataTypes.STRING,
      city_id: DataTypes.INTEGER,
      state_id: DataTypes.INTEGER,
      country_id: DataTypes.INTEGER,
      zipcode: DataTypes.STRING,
      company_id: DataTypes.INTEGER,
      emp_no: DataTypes.STRING,
      start_date: DataTypes.DATE,
      end_date: DataTypes.DATE,
      is_main: DataTypes.INTEGER,
      empcompany_status: DataTypes.STRING,
      grade_code: DataTypes.STRING,
      employ_code: DataTypes.STRING,
      cost_code: DataTypes.STRING,
      spv_parent: DataTypes.STRING,
      spv_pos: DataTypes.STRING,
      spv_path: DataTypes.STRING,
      spv_level: DataTypes.STRING,
      mgr_parent: DataTypes.STRING,
      mgr_pos: DataTypes.STRING,
      mgr_path: DataTypes.STRING,
      mgr_level: DataTypes.STRING,
      pos_parent: DataTypes.STRING,
      pos_path: DataTypes.STRING,
      pospath_level: DataTypes.STRING,
      position_id: DataTypes.STRING,
      pos_code: DataTypes.STRING,
      parent_id: DataTypes.STRING,
      pos_name_en: DataTypes.STRING,
      pos_name_id: DataTypes.STRING,
      pos_name_my: DataTypes.STRING,
      pos_name_th: DataTypes.STRING,
      jobstatuscode: DataTypes.STRING,
      job_status_code: DataTypes.STRING,
      pos_level: DataTypes.STRING,
      parent_path: DataTypes.STRING,
      pos_flag: DataTypes.STRING,
      dept_id: DataTypes.STRING,
      dorder: DataTypes.STRING,
      jobtitle_code: DataTypes.STRING,
      report_topos: DataTypes.STRING,
      clevel: DataTypes.STRING,
      corder: DataTypes.STRING,
      changeflag: DataTypes.STRING,
      report_postype: DataTypes.STRING,
      dept_code: DataTypes.STRING,
      grade_order: DataTypes.STRING,
      grade_category: DataTypes.STRING,
      worklocation_code: DataTypes.STRING,
      businessarea_code: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "EmployeeView",
      tableName: "VIEW_EMPLOYEE",
      timestamps: false,
    }
  );
  return EmployeeView;
};

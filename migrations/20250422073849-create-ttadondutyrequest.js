'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('TTADONDUTYREQUESTs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      request_no: {
        type: Sequelize.STRING
      },
      company_id: {
        type: Sequelize.INTEGER
      },
      requestedby: {
        type: Sequelize.STRING
      },
      requestfor: {
        type: Sequelize.STRING
      },
      requestdate: {
        type: Sequelize.DATE
      },
      purpose_code: {
        type: Sequelize.STRING
      },
      total_destination: {
        type: Sequelize.INTEGER
      },
      remark: {
        type: Sequelize.STRING
      },
      created_by: {
        type: Sequelize.STRING
      },
      created_date: {
        type: Sequelize.DATE
      },
      modified_by: {
        type: Sequelize.STRING
      },
      modified_date: {
        type: Sequelize.DATE
      },
      cancelsts: {
        type: Sequelize.STRING
      },
      upload_filename: {
        type: Sequelize.STRING
      },
      onduty_startdate: {
        type: Sequelize.DATE
      },
      onduty_enddate: {
        type: Sequelize.DATE
      },
      cost_code: {
        type: Sequelize.STRING
      },
      ondutyletter_no: {
        type: Sequelize.STRING
      },
      account_no: {
        type: Sequelize.STRING
      },
      bank_name: {
        type: Sequelize.STRING
      },
      account_name: {
        type: Sequelize.STRING
      },
      paymentrequest_date: {
        type: Sequelize.DATE
      },
      paid_status: {
        type: Sequelize.INTEGER
      },
      budgetno: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('TTADONDUTYREQUESTs');
  }
};
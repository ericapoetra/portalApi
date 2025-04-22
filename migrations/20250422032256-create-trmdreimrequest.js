'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('TRMDREIMREQUESTs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      request_no: {
        type: Sequelize.STRING
      },
      company_code: {
        type: Sequelize.STRING
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
      reim_code: {
        type: Sequelize.STRING
      },
      reim_startdate: {
        type: Sequelize.DATE
      },
      reim_enddate: {
        type: Sequelize.DATE
      },
      empfamily_id: {
        type: Sequelize.STRING
      },
      currency_code: {
        type: Sequelize.STRING
      },
      reimcost: {
        type: Sequelize.DECIMAL
      },
      approvedcost: {
        type: Sequelize.DECIMAL
      },
      remark: {
        type: Sequelize.STRING
      },
      approval_status: {
        type: Sequelize.INTEGER
      },
      paid_status: {
        type: Sequelize.INTEGER
      },
      refdoc: {
        type: Sequelize.STRING
      },
      approved_date: {
        type: Sequelize.DATE
      },
      paid_date: {
        type: Sequelize.DATE
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
      reim_receiptdate: {
        type: Sequelize.DATE
      },
      convertresult: {
        type: Sequelize.DECIMAL
      },
      validcost: {
        type: Sequelize.DECIMAL
      },
      currency_convert: {
        type: Sequelize.STRING
      },
      costcenter_code: {
        type: Sequelize.STRING
      },
      reimbalance_id: {
        type: Sequelize.STRING
      },
      cancelsts: {
        type: Sequelize.STRING
      },
      reqcancel_no: {
        type: Sequelize.STRING
      },
      reimrequest_id: {
        type: Sequelize.STRING
      },
      period_code: {
        type: Sequelize.STRING
      },
      reim_source: {
        type: Sequelize.STRING
      },
      gst_amount: {
        type: Sequelize.DECIMAL
      },
      loss_comp: {
        type: Sequelize.DECIMAL
      },
      loss_comp_percent: {
        type: Sequelize.DECIMAL
      },
      exchange_rate: {
        type: Sequelize.DECIMAL
      },
      gst_amount_approve: {
        type: Sequelize.DECIMAL
      },
      note_approval: {
        type: Sequelize.STRING
      },
      letter_no: {
        type: Sequelize.STRING
      },
      cost_code: {
        type: Sequelize.STRING
      },
      flag_req: {
        type: Sequelize.STRING
      },
      flag_payreq: {
        type: Sequelize.STRING
      },
      empfamily_name: {
        type: Sequelize.STRING
      },
      empfamily_relationship: {
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
    await queryInterface.dropTable('TRMDREIMREQUESTs');
  }
};
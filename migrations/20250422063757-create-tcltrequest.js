'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('TCLTREQUESTs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      sfobject: {
        type: Sequelize.STRING
      },
      company_id: {
        type: Sequelize.INTEGER
      },
      company_code: {
        type: Sequelize.STRING
      },
      req_type: {
        type: Sequelize.STRING
      },
      req_mode: {
        type: Sequelize.TINYINT
      },
      req_no: {
        type: Sequelize.STRING
      },
      req_date: {
        type: Sequelize.DATE
      },
      requester: {
        type: Sequelize.INTEGER
      },
      reqemp: {
        type: Sequelize.STRING
      },
      req_data: {
        type: Sequelize.TEXT
      },
      key_data: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.TINYINT
      },
      isoutstanding: {
        type: Sequelize.TINYINT
      },
      isselectable_approver: {
        type: Sequelize.TINYINT
      },
      isexpired: {
        type: Sequelize.TINYINT
      },
      isreroute: {
        type: Sequelize.TINYINT
      },
      expiry_date: {
        type: Sequelize.DATE
      },
      nstep_expiry_date: {
        type: Sequelize.DATE
      },
      nspare_expiry_date: {
        type: Sequelize.DATE
      },
      approval_list: {
        type: Sequelize.STRING
      },
      approved_list: {
        type: Sequelize.STRING
      },
      outstanding_list: {
        type: Sequelize.STRING
      },
      email_list: {
        type: Sequelize.STRING
      },
      approval_position_list: {
        type: Sequelize.STRING
      },
      approval_data: {
        type: Sequelize.TEXT
      },
      approved_data: {
        type: Sequelize.TEXT
      },
      created_date: {
        type: Sequelize.DATE
      },
      created_by: {
        type: Sequelize.STRING
      },
      modified_date: {
        type: Sequelize.DATE
      },
      modified_by: {
        type: Sequelize.STRING
      },
      outstanding_listemail: {
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
    await queryInterface.dropTable('TCLTREQUESTs');
  }
};
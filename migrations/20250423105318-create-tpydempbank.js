'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('TPYDEMPBANKs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      empbank_id: {
        type: Sequelize.STRING
      },
      emp_id: {
        type: Sequelize.STRING
      },
      bank_code: {
        type: Sequelize.STRING
      },
      bank_account: {
        type: Sequelize.STRING
      },
      account_name: {
        type: Sequelize.STRING
      },
      currency_code: {
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
      start_dt: {
        type: Sequelize.DATE
      },
      end_date: {
        type: Sequelize.DATE
      },
      end_date1: {
        type: Sequelize.DATE
      },
      bank_end_date: {
        type: Sequelize.DATE
      },
      attachment: {
        type: Sequelize.STRING
      },
      is_default: {
        type: Sequelize.TINYINT
      },
      email: {
        type: Sequelize.STRING
      },
      empbank_attach: {
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
    await queryInterface.dropTable('TPYDEMPBANKs');
  }
};
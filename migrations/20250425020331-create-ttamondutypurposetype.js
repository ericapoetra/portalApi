'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('TTAMONDUTYPURPOSETYPEs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      purpose_code: {
        type: Sequelize.STRING
      },
      purpose_name_en: {
        type: Sequelize.STRING
      },
      purpose_name_id: {
        type: Sequelize.STRING
      },
      purpose_name_my: {
        type: Sequelize.STRING
      },
      purpose_name_th: {
        type: Sequelize.STRING
      },
      company_id: {
        type: Sequelize.INTEGER
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
      attend_code: {
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
    await queryInterface.dropTable('TTAMONDUTYPURPOSETYPEs');
  }
};
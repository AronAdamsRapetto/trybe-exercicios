'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Classes', {
      idClass: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        field: 'id_class',
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      alias: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.dropTable('Classes');
  }
};

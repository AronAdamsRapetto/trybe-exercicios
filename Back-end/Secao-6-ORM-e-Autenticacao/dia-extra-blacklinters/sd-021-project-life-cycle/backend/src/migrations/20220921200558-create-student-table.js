'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Students', {
      idStudent: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        field: 'id_student'
      },
      name:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      idClass: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'id_class',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'Classes',
          key: 'id_class',
        },
      },	
    });
  },

  async down (queryInterface, _Sequelize) {    
    await queryInterface.dropTable('Students');
  }
};

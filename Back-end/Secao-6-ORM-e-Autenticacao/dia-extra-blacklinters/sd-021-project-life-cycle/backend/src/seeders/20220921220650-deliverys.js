'use strict';

module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('Deliverys', [
      {
        id_project: 1,
        id_student: 1,
        grade: 0.60,
        delivery_date: '2022-08-30 19:00:16',
      },      
      {
        id_project: 2,
        id_student: 2,
        grade: 0.70,
        delivery_date: '2022-08-30 19:00:16',
      },
      {
        id_project: 2,
        id_student: 4,
        grade: 0.90,
        delivery_date: '2022-08-30 19:00:16',
      },
      {
        id_project: 1,
        id_student: 3,
        grade: 1.00,
        delivery_date: '2022-08-30 19:00:16',
      },
      {
        id_project: 1,
        id_student: 1,
        grade: 0.60,
        delivery_date: '2022-08-30 19:00:16',
      },
      {
        id_project: 3,
        id_student: 6,
        grade: 0.80,
        delivery_date: '2022-08-30 19:00:16',
      },
      {
        id_project: 1,
        id_student: 7,
        grade: 0.90,
        delivery_date: '2022-08-30 19:00:16',
      },
      {
        id_project: 3,
        id_student: 8,
        grade: 0.40,
        delivery_date: '2022-08-30 19:00:16',
      },
      {
        id_project: 1,
        id_student: 3,
        grade: 0.40,
        delivery_date: '2022-08-29 20:28:10',
      },
      {
        id_project: 1,
        id_student: 1,
        grade: 0.40,
        delivery_date: '2022-08-29 20:28:10',
      },
      {
        id_project: 1,
        id_student: 1,
        grade: 0.20,
        delivery_date: '2022-08-28 20:28:10',
      },
      {
        id_project: 1,
        id_student: 3,
        grade: 0.80,
        delivery_date: '2022-08-29 20:28:10',
      },
      {
        id_project: 1,
        id_student: 3,
        grade: 0.60,
        delivery_date: '2022-08-28 20:28:10',
      },
    ], {});
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('Deliverys', null, {});
  }
};

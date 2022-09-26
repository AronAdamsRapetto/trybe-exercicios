'use strict';

module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('Students', [
      {
        name: 'Jamila Silveira',
        email: 'jamila.silveira@betrybe.com',
        password: '4a616d696c61',
        id_class: 2,
      },
      {
        name: 'Caim Sales',
        email: 'caim.sales@betrybe.com',
        password: '4361696d2053',
        id_class: 1,
      },
      {
        name: 'Mauren Martins',
        email: 'mauren.martins@betrybe.com',
        password: '4d617572656e',
        id_class: 2,
      },
      {
        name: 'Lisuarte Barros',
        email: 'lisuarte.barros@betrybe.com',
        password: '4c6973756172',
        id_class: 3,
      },
      {
        name: 'Vera Silva',
        email: 'vera.silva@betrybe.com',
        password: '566572612053',
        id_class: 3,
      },
      {
        name: 'Eberardo Oliveira',
        email: 'eberardo.oliveira@betrybe.com',
        password: '456265726172',
        id_class: 2,
      },
      {
        name: 'Albano Monteiro',
        email: 'albano.monteiro@betrybe.com',
        password: '416c62616e6f',
        id_class: 1,
      },
      {
        name: 'Susano Nascimento',
        email: 'susano.nascimento@betrybe.com',
        password: '537573616e6f',
        id_class: 2,
      },
      {
        name: 'Gerson Fogaça',
        email: 'gerson.fogaça@betrybe.com',
        password: '476572736f6e',
        id_class: 3,
      },
      {
        name: 'Victor Carvalho',
        email: 'victor.carvalho@betrybe.com',
        password: '566963746f72',
        id_class: 2,
      },
      {
        name: 'Miuke da Mota',
        email: 'miuke.da.mota@betrybe.com',
        password: '4d69756b6520',
        id_class: 3,
      },
      {
        name: 'Durbalino das Neves',
        email: 'durbalino.das.neves@betrybe.com',
        password: '44757262616c',
        id_class: 1,
      },
      {
        name: 'Mayara Cardoso',
        email: 'mayara.cardoso@betrybe.com',
        password: '4d6179617261',
        id_class: 2,
      },
      {
        name: 'Herédia Ramos',
        email: 'herédia.ramos@betrybe.com',
        password: '486572e96469',
        id_class: 1,
      },
      {
        name: 'Emídio Gonçalves',
        email: 'emídio.gonçalves@betrybe.com',
        password: '456ded64696f',
        id_class: 1,
      },
    ], {});
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('Students', null, {});
    
  }
};

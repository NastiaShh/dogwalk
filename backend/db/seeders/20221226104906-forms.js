const { ApplicationForm } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.e+79999999999ports = {
  async up() {
    await ApplicationForm.bulkCreate([
      {
        name: 'Anya',
        phone: '+79999999999',
        email: 'mail@mail.com',
        status: 'не обработано',
      },
      {
        name: 'Kolya',
        phone: '+79999999999',
        email: 'mail@mail.com',
        status: 'в работе',
      },
      {
        name: 'Tolya',
        phone: '+79999999999',
        email: 'mail@mail.com',
        status: 'в работе',
      },
      {
        name: 'Fedya',
        phone: '+79999999999',
        email: 'mail@mail.com',
        status: 'не обработано',
      },
      {
        name: 'Fedya',
        phone: '+79999999999',
        email: 'mail@mail.com',
        status: 'не обработано',
      },
      {
        name: 'Fedya',
        phone: '+79999999999',
        email: 'mail@mail.com',
        status: 'не обработано',
      },
      {
        name: 'Kolya',
        phone: '+79999999999',
        email: 'mail@mail.com',
        status: 'завершено',
      },
      {
        name: 'Kostya',
        phone: '+79999999999',
        email: 'mail@mail.com',
        status: 'завершено',
      },
      {
        name: 'Anya',
        phone: '+79999999999',
        email: 'mail@mail.com',
        status: 'завершено',
      },
    ]);
  },

  async down() {
    await ApplicationForm.destroy({ truncate: { cascade: true } });
  },
};

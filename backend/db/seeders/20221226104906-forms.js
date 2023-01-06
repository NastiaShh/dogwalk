const { ApplicationForm } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up() {
    await ApplicationForm.bulkCreate([
      {
        name: 'Anya',
        phone: 'x',
        email: 'mail@mail.com',
        status: 'обрабатывается',
      },
      {
        name: 'Kolya',
        phone: 'x',
        email: 'mail@mail.com',
        status: 'обработано',
      },
      {
        name: 'Tolya',
        phone: 'x',
        email: 'mail@mail.com',
        status: 'обработано',
      },
      {
        name: 'Fedya',
        phone: 'x',
        email: 'mail@mail.com',
        status: 'обрабатывается',
      },
      {
        name: 'Kolya',
        phone: 'x',
        email: 'mail@mail.com',
        status: 'обработано',
      },
    ]);
  },

  async down() {
    await ApplicationForm.destroy({ truncate: { cascade: true } });
  },
};

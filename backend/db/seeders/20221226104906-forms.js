const { ApplicationForm } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up() {
    await ApplicationForm.bulkCreate([
      {
        name: 'Anya',
        phone: 'x',
        email: 'mail@mail.com',
        status: true,
      },
      {
        name: 'Kolya',
        phone: 'x',
        email: 'mail@mail.com',
        status: false,
      },
      {
        name: 'Tolya',
        phone: 'x',
        email: 'mail@mail.com',
        status: false,
      },
      {
        name: 'Fedya',
        phone: 'x',
        email: 'mail@mail.com',
        status: true,
      },
    ]);
  },

  async down() {
    await ApplicationForm.destroy({ truncate: { cascade: true } });
  },
};

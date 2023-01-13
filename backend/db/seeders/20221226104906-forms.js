const { ApplicationForm } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up() {
    await ApplicationForm.bulkCreate([]);
  },

  async down() {
    await ApplicationForm.destroy({ truncate: { cascade: true } });
  },
};

const { Walker } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up() {
    await Walker.bulkCreate([
      {
        name: 'anya',
        photo: 'x',
        description: 'asdasfs',
        rating: 4,
      },
      {
        name: 'toluya',
        photo: 'x',
        description: 'asdasfs',
        rating: 3,
      },
      {
        name: 'edf',
        photo: 'x',
        description: 'asdasfs',
        rating: 1,
      },
      {
        name: 'anya',
        photo: 'x',
        description: 'asdasfs',
        rating: 5,
      },
    ]);
  },

  async down() {
    await Walker.destroy({ truncate: { cascade: true } });
  },
};

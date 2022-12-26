const { Review } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up() {
    await Review.bulkCreate([
      {
        name: 'anya',
        photo: 'x',
        text: 'asdasfs',
        rating: 4,
      },
      {
        name: 'toluya',
        photo: 'x',
        text: 'asdasfs',
        rating: 3,
      },
      {
        name: 'edf',
        photo: 'x',
        text: 'asdasfs',
        rating: 1,
      },
      {
        name: 'anya',
        photo: 'x',
        text: 'asdasfs',
        rating: 5,
      },
    ]);
  },

  async down() {
    await Review.destroy({ truncate: { cascade: true } });
  },
};

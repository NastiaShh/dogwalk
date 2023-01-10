const bcrypt = require('bcrypt');
const { User } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up() {
    await User.bulkCreate([
      {
        name: 'Ulyana',
        email: 'ulyana@mail.ru',
        phone: '9112212121',
        password: await bcrypt.hash('Ulyana1', 10),
        photo: 'https://img.freepik.com/premium-photo/puppy-shiba-inu-in-the-heart-from-the-hands-cute-japanese-shiba-inu-puppy_258431-159.jpg?w=2000',
        role: 'admin',
      },
      {
        name: 'Daniela',
        email: 'daniela@ya.ru',
        phone: '9112212121',
        password: await bcrypt.hash('Daniela1', 10),
        photo: 'https://secretmag.ru/thumb/1200x0/filters:quality(75):no_upscale()/imgs/2021/11/08/14/5011731/dbe3986da0dfe1780a17e9b6ceb816df1e855660.jpeg',
        role: 'admin',
      },
      {
        name: 'Nastya',
        email: 'nastya@ya.ru',
        phone: '9112212121',
        password: await bcrypt.hash('Nastya1', 10),
        photo: 'https://www.greencrossvets.com.au/wp-content/uploads/2022/07/Shiba-Inu-Breed-Guide-1-e1657502016242.jpg',
        role: 'admin',
      },
    ],
      {
        // include: [User.Pets],
      });
  },

  async down() {
    await User.destroy({ truncate: { cascade: true } });
  }
};

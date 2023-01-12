const { Dog } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up() {
    await Dog.bulkCreate([
      {
        user_id: 1,
        name: 'kot',
        breed: 'sebek',
        age: 5,
        size: 'Большая',
        gender: 'Мальчик',
        sterilization: 'Да',
        dog_friendly: 'Да',
        cat_friendly: 'Нет',
        home: 'Да, пока я на работе',
        vaccination: 'Да',
        description: '----------------'
      },
      {
        user_id: 3,
        name: 'Лапка',
        breed: 'Сиба-ину',
        age: 7,
        size: 'Средняя',
        gender: 'Девочка',
        sterilization: 'Да',
        dog_friendly: 'Да',
        cat_friendly: 'Да',
        home: 'С собакой всегда кто-то дома',
        vaccination: 'Да',
        description: 'она зайка'
      }
    ]);
  },

  async down() {
    await Dog.destroy({ truncate: { cascade: true } });
  },
};

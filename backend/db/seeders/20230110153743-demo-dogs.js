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
        size: 'bolshoy',
        gender: 'male',
        sterilization: 'z',
        dog_friendly: 'z',
        cat_friendly: 'z',
        overexposure: 'z',
        home: 'z',
        vaccination: 'z',
        description: 'z'
      }
    ]);
  },

  async down() {
    await Dog.destroy({ truncate: { cascade: true } });
  },
};

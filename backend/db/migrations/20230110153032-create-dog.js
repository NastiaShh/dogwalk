

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Dogs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        // внешний ключ
        references: {
          model: 'Users',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      name: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      breed: {
        type: Sequelize.TEXT
      },
      age: {
        type: Sequelize.INTEGER
      },
      size: {
        type: Sequelize.TEXT
      },
      gender: {
        type: Sequelize.TEXT
      },
      sterilization: {
        type: Sequelize.TEXT
      },
      dog_friendly: {
        type: Sequelize.TEXT
      },
      cat_friendly: {
        type: Sequelize.TEXT
      },
      overexposure: {
        type: Sequelize.TEXT
      },
      home: {
        type: Sequelize.TEXT
      },
      vaccination: {
        type: Sequelize.TEXT
      },
      description: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('Dogs');
  }
};



const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Dog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User }) {
      Dog.User = Dog.belongsTo(User, { foreignKey: 'user_id' });
    }
  }
  Dog.init({
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      // внешний ключ
      references: {
        model: 'Users',
        key: 'id',
      },
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    breed: DataTypes.TEXT,
    age: DataTypes.INTEGER,
    size: DataTypes.TEXT,
    gender: DataTypes.TEXT,
    sterilization: DataTypes.TEXT,
    dog_friendly: DataTypes.TEXT,
    cat_friendly: DataTypes.TEXT,
    overexposure: DataTypes.TEXT,
    home: DataTypes.TEXT,
    vaccination: DataTypes.TEXT,
    description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Dog',
  });
  return Dog;
};

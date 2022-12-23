

const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Walker extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  Walker.init({
    name: DataTypes.TEXT,
    photo: DataTypes.TEXT,
    description: DataTypes.TEXT,
    rating: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Walker',
  });
  return Walker;
};

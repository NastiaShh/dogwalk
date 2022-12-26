

const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ApplicationForm extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  ApplicationForm.init({
    name: DataTypes.TEXT,
    phone: DataTypes.TEXT,
    email: DataTypes.TEXT,
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'ApplicationForm',
  });
  return ApplicationForm;
};

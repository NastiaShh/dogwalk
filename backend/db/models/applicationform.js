

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
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    phone: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    email: {
      type: DataTypes.TEXT,
    },
    status: DataTypes.TEXT,
    date: DataTypes.DATEONLY,
    time: DataTypes.TIME,
  }, {
    sequelize,
    modelName: 'ApplicationForm',
  });
  return ApplicationForm;
};

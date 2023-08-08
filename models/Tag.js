const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Tag extends Model {}

Tag.init(
  {
    // define columns
    // book_id: {
    //   type: DataTypes.INTEGER,
    //   primaryKey: true,
    //   autoIncrement: true
    // },
    // title: {
    //   type: DataTypes.STRING
    // },
    // author: {
    //   type: DataTypes.STRING
    // },
    // isbn: {
    //   type: DataTypes.STRING
    // },
    // pages: {
    //   type: DataTypes.INTEGER
    // },
    // edition: {
    //   type: DataTypes.INTEGER
    // },
    // is_paperback: {
    //   type: DataTypes.BOOLEAN
    // }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;
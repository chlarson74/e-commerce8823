// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
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
    modelName: 'product',
  }
);

module.exports = Product;

//************************************ */
// const { DataTypes, Model } = require('sequelize');
// const sequelize = require('../config/database'); // Assuming you have configured your Sequelize instance

// class Product extends Model {}

// Product.init({
//   // Define other attributes of the Product model here

//   // Define the foreign key referencing the Category model
//   categoryId: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//     references: {
//       model: 'Category', // This should match the name of your Category model
//       key: 'id', // The primary key column of the Category model
//     },
//   },
// }, {
//   sequelize,
//   modelName: 'Product',
// });

// module.exports = Product;
const db = require('../utils/database');//importamos la base de datos
const {DataTypes} = require('sequelize');//importamos el tipo de datos de sequelize

const Categories = db.define('categories', {
    id:{
        primaryKey:true,
        type: DataTypes.INTEGER,
        autoIncrement:true,
        allowNull:false,
        unique:true,
    },
    name:{
        type: DataTypes.STRING,
        allowNull:false,
        unique:true,
    },
},
{
    timestamps:false
});
module.exports = Categories;

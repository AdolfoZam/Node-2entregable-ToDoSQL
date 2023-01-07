//instancia para la conexion de la DB
const db = require('../utils/database');
//tipos de datos de sequelize varchar a string
const {DataTypes} = require('sequelize');
//definir el modelo de usuarios
//los modeloes se definen con una mayuscula inciando
//1. se crea la tabla
//2. se crea los atributos de la tabla, en forma de objeto
const Users = db.define("users",{
    id:{
        primaryKey:true,
        type:DataTypes.INTEGER,
        autoIncrement:true,
        allowNull:false,
    },
    username:{
        allowNull:false,
        type:DataTypes.STRING,
        unique:true,
    },
    email:{
        allowNull:false,
        type:DataTypes.STRING,
        unique:true,
        validate:{
            isEmail:true,
        }
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false,
    },
});
module.exports = Users;

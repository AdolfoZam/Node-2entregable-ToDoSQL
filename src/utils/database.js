const {Sequelize} = require('sequelize');
require("dotenv").config()
//creamos una instancia con parametros de configuracion de nustra base de datos
//un objeto de configuracion, con las credenciales de mi base de datos
const db = new Sequelize({
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    host: process.env.DB_HOST,//127.0.0.1 es el local host
    port: process.env.DB_PORT,
    password: process.env.DB_PASSWORD,//pones tu contraseña
    dialect:"postgres",//la base de datos que estamos utilizando 
    logging:false,
    // dialectOptions: { ssl: { require: true, rejectUnauthorized: false}},
});//esta ultima linea se debe quitar para correr el proyecto local
module.exports = db;


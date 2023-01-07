const {Sequelize} = require('sequelize');
//creamos una instancia con parametros de configuracion de nustra base de datos
//un objeto de configuracion, con las credenciales de mi base de datos
const db = new Sequelize({
    database:"todoapp",
    username:"postgres",
    host:"localhost",//127.0.0.1 es el local host
    port:"5432",
    password:"ruta",//pones tu contraseña
    dialect:"postgres"//la base de datos que estamos utilizando 
});
module.exports = db;


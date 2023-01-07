//importamos la base de datos
const db = require('../utils/database');
const {DataTypes} = require('sequelize'); 
const Users = require('./users.models');
//1.creamos la tabla, y el segundo parametro son los atributos
const Todos = db.define('todos',{
    id:{
        primaryKey:true,
        type:DataTypes.INTEGER,
        autoIncrement:true,
        allowNull:false,
        unique:true,
    },
    title:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    description:{
        type:DataTypes.STRING,
    },
    isComplete:{
        type:DataTypes.BOOLEAN,
        defaultValue:false,
        field:"is_complete",//sirve para crear el campo igual como lo queremos a pesar que sea el atributo diferente.
    },
    userId:{
        type:DataTypes.INTEGER,
        allowNull:false,
        field:"user_id",
        references: {
            model: Users,//es el modelo al cual voy a referenciar
            key: "id",//es la llave por la cual me voy a conectar a la tabla users
        }
    },
});
module.exports = Todos;

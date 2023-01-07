const db = require('../utils/database');
const Users = require('../models/users.models');
const Todos = require('../models/todos.models');

const users = [
    {username:"adolfo", email:"adolfo@gmail.com", password:"1234"},
    {username:"lucero", email:"lucero@gmail.com", password:"1234"},
    {username:"lina", email:"lina@gmail.com", password:"1234"},
];

const todos = [
    {title:"tarea 1",description:"descripcion para tarea 1", userId:1},
    {title:"tarea 2",description:"pendiente 2", userId:1},
    {title:"tarea dificil", userId:2},
    {title:"tarea dormir",description:"porque no deja", userId:3},
];

// const categories = [];

// const todosCategories = [];
//metodos create, findOne, find All,findByPk, update, destroy
db.sync({force: false})
    .then(()=>{
        console.log("iniciando con el sembrado");
            users.forEach((user)=> Users.create(user)); 
            setTimeout(()=>{
                todos.forEach((todo)=>Todos.create(todo));
            },100);
    })
    .catch((error)=>console.log(error));




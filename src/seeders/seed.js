const db = require('../utils/database');
const Users = require('../models/users.models');
const Todos = require('../models/todos.models');
const Categories = require('../models/categories.models');
const TodosCategories = require('../models/todos-categories.models');
const users = [
    {username:"adolfo", email:"adolfo@gmail.com", password:"1234"},
    {username:"lucero", email:"lucero@gmail.com", password:"1234"},
    {username:"lina", email:"lina@gmail.com", password:"1234"},
];

const todos = [
    {title:"estudiar node",description:"descripcion para tarea 1", userId:1},
    {title:"pasear al perro",description:"pendiente 2", userId:1},
    {title:"lavar los platos", userId:2},
    {title:"ir al chekeo mensual",description:"porque no deja", userId:3},
];

const categories = [
    {name:'personal'},//1
    {name:'eduacion'},//2
    {name:'salud'},//3
    {name:'trabajo'},//4
    {name:'hogar'},//5
    {name:'cocina'},//6
    {name:'deporte'},//7
    {name:'ocio'},//8
    {name:'financiero'},//9
    {name:'entretenimiento'},//10
];

const todosCategories = [
    {categoryId: 1, todoId:1},
    {categoryId: 2, todoId:1},
    {categoryId: 4, todoId:1},
    {categoryId: 1, todoId:2},
    {categoryId: 7, todoId:2},
    {categoryId: 10, todoId:2},
    {categoryId: 3, todoId:2},
    {categoryId: 5, todoId:3},
    {categoryId: 6, todoId:3},
    {categoryId: 1, todoId:4},
    {categoryId: 3, todoId:4},
];
//metodos create, findOne, find All,findByPk, update, destroy
db.sync({force: false})
    .then(()=>{
        console.log("iniciando con el sembrado");
            users.forEach((user)=> Users.create(user)); 
            setTimeout(()=>{
                todos.forEach((todo)=>Todos.create(todo));
            },100);
            setTimeout(()=>{
                categories.forEach((category)=>Categories.create(category));
            },200);
            setTimeout(()=>{
                todosCategories.forEach((tc)=> Categories.create(tc));
            },300);
    })
    .catch((error)=>console.log(error));




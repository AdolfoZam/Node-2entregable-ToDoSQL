//vamos a importar todos nuestros modelos creados
const Users = require('./users.models');//importamos el modelo
const Todos = require('./todos.models');//importamos el modelo
const Categories = require('./categories.models');//importamos el modelo
const TodosCategories = require('./todos-categories.models');//importamos el modelo

const initModels = ()=>{
   
    //creamos las relaciones
    //hasOne - relacion uno a uno
    //hasMany - Relacion de muchos
    //belongsTo - pertenece a
     Todos.belongsTo(Users, {as:"author", foreignKey:"user_id"});//el modelo de la tabla todos le pertenece a Users
     Users.hasMany(Todos, {as:"task", foreignKey:"user_id"});//el modelo de tabla Users tiene muchos de la tabla Todos
    //relacion M-M entre ctegorias y todos
    TodosCategories.belongsTo(Todos, {as:"task", foreignKey:"todo_id"});
    Todos.hasMany(TodosCategories, {as:"category", foreignKey:"todo_id"})
    
    TodosCategories.belongsTo(Categories, {as:"category", foreignKey:"category_id"});
    Categories.hasMany(TodosCategories, {as:"task", foreignKey:"category_id"});
    }
module.exports = initModels;


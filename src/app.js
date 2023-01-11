//importar modulo de express
const express = require('express');
//crear una instancia de express
const db = require("./utils/database");
const initModels = require('./models/init.model');//imporatamos  initmodels para importar las tablascreadas
const Users = require('./models/users.models');
const Todos = require('./models/todos.models');
const userRoutes = require('./routes/users.routes');
const todosRoutes = require('./routes/todos.routes');
const app = express();
app.use(express.json());
const PORT = 8000;
//localhost:8000/127.0.0.1
//probando la conexion a la base de datos
db.authenticate()//es un metodo que devuelve una promesa y la resolvemos con el then
.then(()=>console.log('autenticacion exitosa'))
.catch((error)=>console.log(error));

initModels();
//vamos a usar el metodo sync de nuestra base
//con alter, digo que estoy alterando el contenido de la tabla, 
db.sync({force:false})//devulve una promesa y la mostramos por el then
.then(()=>console.log('base de datos sincronizada'))
.catch((error)=>console.log(error));
app.get('/',(req,res)=>{
    res.status(200).json({message:"Bienvenido al servidor"})
});
//escucha todas las peticiones y las busca en user.routes a traves de userRoutes
app.use('/api/v1',userRoutes);//lo pongo para poder mostrar todas las petuciones
//escucha todas las peticiones a todos a traves de todosRoutes
app.use('/api/v1', todosRoutes);//2 parametros
//definir las rutas de nustros endPoint (ep)
//todas las consultas
//localhost:8000/users  - todo para usuarios
//localhost:8000/todos - todo para tareas
//GET a users
app.get('/users', async(req,res)=>{
    try{
//vamos obtener el resultado de consultar los usuarios
const result = await Users.findAll();
res.status(200).json(result);
    }catch(error){
        console.log(error);
    }
})
//obtener un usuario desde su id
app.get("/users/:id",async(req,res)=>{
    try{
     console.log(req.params);
     const {id} = req.params;
     const result = await Users.findByPk(id);
     res.status(200).json(result);
    }catch(error){
        console.log(error);
    }
});
//obtener un usuario por username
app.get("/users/username/:username", async (req, res) => {
    try {
      const { username } = req.params;
      const result = await Users.findOne({ where: { username } }); // SELECT * FROM users WHERE username = iannacus
      res.status(200).json(result);
    } catch (error) {
      console.log(error);
    }
  });
 //creando un usuario
app.post("/users", async (req, res) => {
    try {
      const user = req.body;
      const result = await Users.create(user);
      res.status(201).json(result);
    } catch (error) {
        res.status(400).json(error.message);
      console.log(error);
    }
  });
  //actualizar un usuario
  app.put('/users/:id', async (req,res)=>{
    try{
        const {id} = req.params;//{id:2}
        const field = req.body;
        const result = await Users.update(field,{
            where: {id},
        });
        res.status(200).json(result);
    }catch (error) {
        res.status(400).json(error.message);
      console.log(error);
    }
  });
  //eliminar un usuario
  app.delete('/users/:id', async (req,res)=>{
    try{
        const {id} = req.params;//{id:2}
        const result = await Users.destroy({
            where: {id},
        });
        res.status(200).json(result);
    }catch (error) {
        res.status(400).json(error.message);
      console.log(error);
    }
  });
//consulta de todos
  app.get('/todos', async(req,res)=>{
      try{
        //vamos a consultar las todos, es decir las tareas
        const result = await Todos.findAll();
        res.status(200).json(result);
      }catch(error){
        console.log(error);
      }
  });
  //obtener una tarea por el ID
  app.get('/todos/:id', async(req, res)=>{
    try{
//consultar por el id del usuario
      const {id} = req.params;
      const result = await Todos.findByPk(id);
      res.status(200).json(result);
    }catch(error){
      console.log(error);
    }
  });
  // voy a consultar las tares por el usuario que la creo
  app.get("/todos/userId/:userId", async (req, res) => {
    try {
      const { userId } = req.params;
      const result = await Todos.findOne({ where: { userId } }); // SELECT * FROM users WHERE username = iannacus
      res.status(200).json(result);
    } catch (error) {
      console.log(error);
    }
  });
  //crear una tarea
  app.post('/todos', async(req,res)=>{
    try{
      const todo = req.body;
      const result = await Todos.create(todo)
      res.status(201).json(result);
    }catch(error){
      console.log(error);
    }
  });
  //actualizando la tarea
  app.put('/todos/:id', async(req,res)=>{
    try{
      const {id} = req.params;//destructuramos
      const field = req.body;
      const result = await Todos.update(field,{//2 parametros, field y where
        where: {id},
      });
      res.status(200).json(result);
    }catch(error){
      res.status(400).json(error.message);
      console.log(error);
    }
  });
  //eliminando la tarea
  app.delete('/todos/:id', async(req,res)=>{
    try{
      const {id} = req.params;
      const result = await Todos.destroy({
        where: {id},
      });
      res.status(200).json(result);
    }catch(error){
      res.status(400).json(error.message);
      console.log(error);
    }
  });
  app.listen(PORT);



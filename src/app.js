//importar modulo de express
const express = require('express');
//crear una instancia de express
const db = require("./utils/database");
const initModels = require('./models/init.model');//imporatamos  initmodels para importar las tablascreadas
const Users = require('./models/users.models');
const Todos = require('./models/todos.models');
const userRoutes = require('./routes/users.routes');
const todosRoutes = require('./routes/todos.routes');
const cors = require('cors');
const authRoutes = require('./routes/auth.routes');


const app = express();
app.use(express.json());
app.use(cors());//deja hacer peticiones de todo mundo


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
app.use('/api/v1', userRoutes);//lo pongo para poder mostrar todas las peticiones
//escucha todas las peticiones a todos a traves de todosRoutes
app.use('/api/v1', todosRoutes);//2 parametros
app.use('/api/v1', authRoutes);
//definir las rutas de nustros endPoint (ep)
//todas las consultas
//localhost:8000/users  - todo para usuarios
//localhost:8000/todos - todo para tareas
//GET a users

  app.listen(PORT,()=>{
    console.log(`servidor corriendo en el puerto ${PORT}`);
  });



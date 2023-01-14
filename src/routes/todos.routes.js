const {Router} = require('express');
const {
    getAllTodos,
    getTodosById,
    createTodos,
    updateTodos,
    deleteTodos,
    getTodosWithCategories,
    
} = require('../controllers/todos.controller');

const router = Router();
//localhost:8000/todos
//vamos a tener nuestra rutas de los contraoladores
router.get('/todos', getAllTodos);

router.get('/todos/:id', getTodosById);

router.get('/todos/:id/categories', getTodosWithCategories);

//hacer un endpoint con tareas con las categorias, pertenecen a un usuario por su id

router.post('/todos', createTodos);

router.put('/todos/:id',updateTodos);

router.delete('/todos/:id', deleteTodos);

module.exports = router;



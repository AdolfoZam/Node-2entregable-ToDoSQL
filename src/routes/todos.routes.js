const {Router} = require('express');
const {
    getAllTodos,
    getTodosById,
    createTodos,
    updateTodos,
    deleteTodos,
    getTodosWithCategories,
    
} = require('../controllers/todos.controller');

const authMiddleware = require('../middlwares/auth.middlewares');

const router = Router();
//localhost:8000/todos
//vamos a tener nuestra rutas de los contraoladores
router.get('/todos', authMiddleware, getAllTodos);

router.get('/todos/:id', authMiddleware, getTodosById);

router.get('/todos/:id/categories', authMiddleware, getTodosWithCategories);

//hacer un endpoint con tareas con las categorias, pertenecen a un usuario por su id

router.post('/todos', authMiddleware, createTodos);

router.put('/todos/:id', authMiddleware, updateTodos);

router.delete('/todos/:id', authMiddleware, deleteTodos);

module.exports = router;



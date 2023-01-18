const {Router} = require('express');
const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    getUserWithTasks,
} = require('../controllers/users.controller');

const authMiddleware = require('../middlwares/auth.middlewares')

const router = Router();
//localhost:8000/users
//vamos a tener nuestro controlador
router.get('/users', authMiddleware, getAllUsers);//el segundo parametro es una funcion, toda la linea es un middleware
   //es un enrutador
router.get('/users/:id', authMiddleware, getUserById);

//obtener a un usuario con sus tareas
router.get('/users/:id/todos', authMiddleware, getUserWithTasks);//esto es un endpoint

router.post('/users', createUser);

router.put('/users/:id', authMiddleware, updateUser);

router.delete('/users/:id', authMiddleware, deleteUser);

module.exports = router;

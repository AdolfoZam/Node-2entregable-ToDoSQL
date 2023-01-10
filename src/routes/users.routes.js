const {Router} = require('express');
const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
} = require('../controllers/users.controller');

const router = Router();
//localhost:8000/users
//vamos a tener nuestro controlador
router.get('/users', getAllUsers)
   //es un enrutador
router.get('/users/:id', getUserById);

router.post('/users', createUser)

router.put('/users/:id', updateUser)

router.delete('/users/:id', deleteUser)

module.exports = router;

const { userLogin } = require('../controllers/auth.controller');
const { Router } = require('express');//importamos el router de express

const router = Router();//instancia del router

router.post('/auth/login', userLogin);//para hacer un login se realiza con el metodo post

module.exports = router;


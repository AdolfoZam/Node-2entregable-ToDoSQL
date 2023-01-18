const jwt = require('jsonwebtoken');

const authMiddleware = ( req, res, next ) => {
    let { authorization: token } = req.headers;// esto es destructurando y es igual
    // a la siguiente linea const token=req.headers.authorization;
    token = token.replace("Bearer ", "");
    //token = token.split(" ")[1]; esta liena hace lo mismo que la linea 6, con otro metodo
    console.log(token);
   jwt.verify(
    token, "zaid", 
    { algorithms: "HS512"},
    (err, decoded) => {
        if (err){
            res.status(400).json({
                error: "invalid token",
                message:"el token no es valido o ya inspiro, envia token correcto"
            })
        } else {
            console.log(decoded);
            next();
        }
    }
    ); 
    
}

module.exports = authMiddleware;



//vamos a validar el token
//si el token es valido, lo dejamos pasar a la ruta
//si es invalido, no puedes ingresar
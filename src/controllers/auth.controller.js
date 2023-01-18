const AuthService = require("../services/auth.services");
const jwt = require("jsonwebtoken");

const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const response = await AuthService.login(email, password);
    // {isValid: true/false}
    if (response.isValid) {
      const data = {
        email: response.result.email,
        username: response.result.username,
        id: response.result.id,
      };
      // firmamos un nuevo token, con la palabra secreta zaid
      const token = jwt.sign(data, 'zaid', { algorithm: "HS512", expiresIn:"1m"})
      data.token = token;
      // console.log(token);//con este console valido que estoy guardando el token en la data
      res.json(data);
  } else{
    res.status(401).json({message: "credenciales invalidas"});
  }
  } catch (error) {
    res.status(400).json(error.message)
}
}
module.exports = {
  userLogin
}



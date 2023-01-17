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
      // firmamos un nuevo token
      const token = jwt.sign(data, "zaid0504", { algorithm: "HS512" });
      data.token = token;
      console.log(data);
      res.json(data);
    }else{
        res.status(401).json({message:"creadenciales invalidas"})
    }
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = {
  userLogin,
};


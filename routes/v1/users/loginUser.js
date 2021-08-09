const { JsonWebTokenError } = require("jsonwebtoken");
const userService = require("../../../services/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
var bodyParser = require("body-parser");

module.exports = () => {
  return async (req, res) => {
    const userId = await req.params.id;
    const password_entered = await bcrypt.hash(req.body.password_entered, 10);
    const user = await userService.loginUser(userId); //you will get an array of all users that match the id from getUser fn - in our case since only one user will have same id; therefore it will be array of single object
    let message = "";
    let name = "";
    let email = "";
    let loginMessage = "";

    if (user.length > 0) {
      //we have a matched user
      message = "User found";
      console.log(password_entered);

      name = await user[0].name;
      email = await user[0].email;
      password = await user[0].password;
      console.log(password);
      console.log(password_entered);

      if (bcrypt.compare(password, password_entered)) {
        res.send("Success");
        loginMessage = "Login Successful!";
        // const accessToken = jwt.sign(user[0], process.env.ACCESS_TOKEN_SECRET);
        // res.json({ accessToken: accessToken });
      } else {
        console.log("asdas");
        res.send("Not allowed");
        loginMessage = "Incorrect Password";
      }
    } else {
      message = "No user found";
      return res.status(400).send("Cannot find user");
    }
    // res.status(200).json({
    //   success: true,
    //   message,
    //   name,
    //   email,
    //   loginMessage,
    // });
  };
  // if (password === password_entered) {
};

// };

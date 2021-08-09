const bcrypt = require("bcrypt");
const userService = require("../../../services/user");
module.exports = () => {
  return (req, res) => {
    try {
      //getting data from requests.body and giving POST request to server
      const requestData = req.body;
      const name = requestData.name;
      const email = requestData.email;
      const mobile = requestData.mobile;

      // const salt = bcrypt.genSalt(); //Pass value > 10 in genSalt to create stronger hashes
      // const hashedPassword = bcrypt.hash(requestData.password, salt);
      const hashedPassword = bcrypt.hash(requestData.password, 10); //parameter 10 will automatically generate salt
      const confirm_password = bcrypt.hash(requestData.confirm_password, 10);

      const id = userService.registerNewUser(
        name,
        email,
        mobile,
        hashedPassword,
        confirm_password
      );
      res.status(200).json({
        success: true,
        message:
          "User inserted with name as " +
          name +
          " successfully with user id as " +
          id,
      });
    } catch {
      res.status(500).send();
    }
  };
};

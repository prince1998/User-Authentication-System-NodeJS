const bcrypt = require("bcrypt");
const userService = require("../../../services/user");
module.exports = () => {
  return async (req, res) => {
    try {
      //getting data from requests.body and giving POST request to server
      const requestData = await req.body;
      const name = await requestData.name;
      const email = await requestData.email;
      const mobile = await requestData.mobile;

      // const salt = bcrypt.genSalt(); //Pass value > 10 in genSalt to create stronger hashes
      // const hashedPassword = bcrypt.hash(requestData.password, salt);
      const hashedPassword = String(bcrypt.hashSync(requestData.password, 10)); //parameter 10 will automatically generate salt
      const confirm_password = String(
        bcrypt.hashSync(requestData.confirm_password, 10)
      );
      console.log(confirm_password);
      console.log(hashedPassword);

      if (bcrypt.compare(hashedPassword, confirm_password)) {
        console.log("Success!");
      } else {
        console.log("Cannot register");
      }

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

const userService = require("../../../services/user");
module.exports = () => {
  return (req, res) => {
    const userId = req.params.id;
    const user = userService.getUser(userId); //you will get an array of all users that match the id from getUser fn - in our case since only one user will have same id; therefore it will be array of single object
    let message = "";
    if (user.length > 0) {
      //we have a matched user
      message = user[0].name;
    } else {
      message = "No user found";
    }
    res.status(200).json({
      success: true,
      message,
    });
  };
};

const userService = require("../../../services/user");
module.exports = () => {
  return (req, res) => {
    const userId = req.params.id;
    let message = "";
    //we have a matched user
    const user = userService.getUser(userId); //you will get an array of all users that match the id from getUser fn - in our case since only one user will have same id; therefore it will be array of single object
    const updatedName = req.body.name ?? user[0].name;
    const updatedEmail = req.body.email ?? user[0].email;
    const updatedMobile = req.body.mobile ?? user[0].mobile;
    userService.updateUserInfo(
      userId,
      updatedName,
      updatedEmail,
      updatedMobile
    );
    message = "Updated User Info";
    res.status(200).json({
      success: true,
      message,
      updatedName,
      updatedEmail,
      updatedMobile,
    });
  };
};

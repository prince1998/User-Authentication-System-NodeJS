const routes = require("express").Router();

module.exports = () => {
  //exported a defualt function
  // since id is not specified, get all users
  routes.get("/", require("./getAllUsers")()); //calling getAllUsers file, therefore ()
  routes.get("/:id", require("./get")());
  routes.post("/", require("./post")());
  routes.get("/:id/login", require("./loginUser")());
  routes.post("/:id/updateUserInfo", require("./updateUserInfo")());
  return routes;
};

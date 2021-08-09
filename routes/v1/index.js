const routes = require("express").Router();

module.exports = () => {
  routes.use("/user", require("./users")()); //it calls index.js inside users folder if it encounters /user in API endpoint
  return routes;
};

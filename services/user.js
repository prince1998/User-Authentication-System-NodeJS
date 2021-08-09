const allUsers = [
  {
    id: 1,
    name: "James",
    email: "james@gmail.com",
    mobile: "9898564142",
    password: "password",
    confirm_password: "password",
  },
  {
    id: 2,
    name: "Harry",
    email: "harry@gmail.com",
    mobile: "9898765091",
    password: "password",
    confirm_password: "password",
  },
];

const getAllUsers = () => {
  return allUsers;
};

const getUser = (id) => {
  // filter function will return an array that has been filtered
  const user = allUsers.filter((eachUser) => eachUser.id == id);
  return user;
};

const registerNewUser = (name, email, mobile, password, confirm_password) => {
  const id = allUsers.length + 1; //if we want to create new user, we will increment id by 1
  let user = {
    id: id,
    name: name,
    email: email,
    mobile: mobile,
    password: password,
    confirm_password: confirm_password,
  };
  // jwt.sign(user, process.env.ACCESS_TOKEN_SECREY);
  allUsers.push(user);
  return id;
};

const loginUser = (id) => {
  const user = allUsers.filter((eachUser) => eachUser.id == id);
  return user;
};

const updateUserInfo = (id, updatedName, updatedEmail, updatedMobile) => {
  const user = allUsers.filter((eachUser) => eachUser.id == id);
  user.name = updatedName;
  user.email = updatedEmail;
  user.mobile = updatedMobile;
};

module.exports = {
  getAllUsers,
  getUser,
  registerNewUser,
  loginUser,
  updateUserInfo,
};

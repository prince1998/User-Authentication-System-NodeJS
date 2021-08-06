const allUsers = [{
    id: 1,
    name: 'James'
},
{
    id: 2,
    name: 'Mike'
}
];

const getAllUsers = () => {
    return allUsers;
};

const getUser = (id) => {
    // filter function will return an array that has been filtered
    const user = allUsers.filter((eachUser) => eachUser.id == id)
    return user;
}

const registerNewUser = (name) => {
    const id = allUsers.length + 1; //if we want to create new user, we will increment id by 1
    let user = {
        id:id,
        name:name
    };
    allUsers.push(user);
    return id;
}


module.exports = {
    getAllUsers,
    getUser,
    registerNewUser
}
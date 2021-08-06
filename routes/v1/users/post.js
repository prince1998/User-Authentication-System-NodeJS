const userService = require('../../../services/user');
module.exports = () => {
    return (req,res) => {
        //getting data from requests.body and giving POST request to server
        const requestData = req.body;
        const name = requestData.name;
        const id = userService.registerNewUser(name);
        res.status(200).json({
            success:true,
            message:'User inserted with name as ' + name + ' successfully with user id as ' +id
        })
    }
}
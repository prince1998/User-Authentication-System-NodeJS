const getUserMessage = (method) => {
    return getMessage(method);
};

const getMessage = (method) => {
    let message = '';
    switch (method) {
        case 'GET':
            message = 'Hello from GET method!';
            break;
        case 'POST':
            message = "Hello from a POST method!";
            break;
        default:
            message = "Hello";
            break;
    }
    return message;
};

module.exports = {
    getUserMessage 
}
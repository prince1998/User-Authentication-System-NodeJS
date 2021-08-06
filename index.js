const express = require('express');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 8080;
const messageService = require('./services/message');
const bodyParser = require('body-parser');
const routesController = require('./routes/v1')(); 
app.get('/',(req,res) => {
    res.status(200).json({
        success: true,
        message: messageService.getUserMessage('GET')
    })
});

app.post('/',(req,res) => {
    res.status(200).json({
        success: true,
        message: messageService.getUserMessage('POST')
    })
});

app.listen(port, () => {
    console.log("Server has started and it is listening on Port:", port);
});

app.use(bodyParser.json({extended: true}));
app.use('/api/v1',routesController);

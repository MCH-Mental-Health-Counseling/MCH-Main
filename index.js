const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
const app=express();

const config= require('./config/keys');
const mongoose = require('mongoose');
mongoose.connect(config.mongoURI, {useNewUrlParser:true});

app.use(bodyParser.json());

require('./routes/dialogFlowRoutes')(app);
require('./routes/loginRoutes')(app);

app.listen(port, ()=>{
    console.log("server is running");
})
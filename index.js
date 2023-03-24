const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
const app=express();

app.use(bodyParser.json());

require('./routes/dialogFlowRoutes')(app);

app.listen(port, ()=>{
    console.log("server is running");
})
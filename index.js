const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
const app=express();

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.get('df/server', (req,res)=>{
    res.send("hi from server")
})

require('./routes/dialogFlowRoutes')

app.listen(port, ()=>{
    console.log("server is running");
})
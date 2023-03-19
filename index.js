const express = require('express');
const app=express();

app.get('/', (req,res)=>{
    res.send({'Hello there,': 'welcome to MCH'});
});


const PORT = process.env.PORT || 5000;

app.listen(PORT);
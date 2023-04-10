const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
const app=express();

const config= require('./config/keys');
const mongoose = require('mongoose');

mongoose.connect(config.mongoURI, {useNewUrlParser:true,useUnifiedTopology:true});

app.use(bodyParser.json());

require('./routes/dialogFlowRoutes')(app);
require('./routes/loginRoutes')(app);
//require('./chatbot/models/registration');
//require('./routes/fulfillmentRoutes')(app);
//require('./routes/messagesRoutes')(app);

if (process.env.NODE_ENV === 'production') {
    // js and css files
    app.use(express.static('client/build'));

    // index.html for all page routes
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

app.listen(port, ()=>{
    console.log("server is running");
})
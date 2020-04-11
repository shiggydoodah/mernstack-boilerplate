const express = require('express'); 
const mongoose = require('mongoose'); 

const app = express(); 
// const test = process.env.HELLO_WORLD; 
// DB config 
const db = require('./config/keys').mongoURI; 

// Connect to mongoDB
mongoose.connect(db)
    .then( () => { console.log('MongoDB Connected'); })
    .catch( err => console.log(err));

// Express    
app.get('/',(req, res) => res.send("Hello World"));

// Server
const port = process.env.PORT || 5000;
 
app.listen(port, ()=> console.log(`Server running on port ${port}`));
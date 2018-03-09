
const express =require ("express");

const path = require ('path');
const bodyParser = require ('body-parser');
const cors = require ('cors');
const passport = require ('passport');
const mongoose = require ('mongoose');
const config =require('./config/database')


const user = require('./routes/user');

//connect datsbase
mongoose.connect(config.database);

mongoose.connection.on('connected', ()=>{
console.log("Connected tp database" + config.database);

});

mongoose.connection.on('error', (err)=>{
    console.log("Database error" + err);
    
    });

const app =express();

const port = 3000;

//cors middleware
app.use(cors());

//Body [parser middleware]
app.use(bodyParser.json());

app.use('/users', user);

//index route
app.get('/', (req, res)=>{

    res.send("Invalid Endpoint");


});






app.listen(port,()=>{

console.log("server started");
});


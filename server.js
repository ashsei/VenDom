// DEPENDENCIES //
const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const app = express();
const propertiesController = require('./controllers/properties.js');
const db = mongoose.connection;

// PORT //
const port = process.env.PORT || 3000;

// DATABASE //
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/'+ `vendom`;

mongoose.connect(MONGODB_URI , { 
    useNewUrlParser: true,
    useUnifiedTopology: true, 
    useFindAndModify: false });

db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));

db.on('open' , ()=>{});

// MIDDLEWEAR //
app.use(methodOverride('_method'));
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));
app.use('/vendom', propertiesController);
// mongoose.connect('mongodb://localhost:27017/vendom', { 
//     useNewUrlParser: true , 
//     useUnifiedTopology: true, 
//     useFindAndModify: false, 
// });
// mongoose.connection.once('open', () => {
//     console.log('Connected to Mongo');
// });

// LISTENER //
app.listen(port, () => {
    console.log('Listening on Port ' + port);
})

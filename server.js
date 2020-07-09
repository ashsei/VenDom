// SETUP //
const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const app = express();
const PORT = 3000;
const propertiesController = require('./controllers/properties.js');
app.use(propertiesController);

app.use(methodOverride('_method'));
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));
mongoose.connect('mongodb://localhost:27017/vendom', { 
    useNewUrlParser: true , 
    useUnifiedTopology: true, 
    useFindAndModify: false, 
});
mongoose.connection.once('open', () => {
    console.log('Connected to Mongo');
});

// LISTENER //
app.listen(PORT, () => {
    console.log('Listening on Port ' + PORT);
})

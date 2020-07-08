// SETUP //
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;

app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));
mongoose.connect('mongodb://localhost:27017/vendom', { useNewUrlParser: true , useUnifiedTopology: true });
mongoose.connection.once('open', () => {
    console.log('Connected to Mongo');
});

// DATA //
const Property = require('./models/propertySchema.js');

// ROUTES //
    // NEW //
    app.get('/vendom/add', (req, res) => {
        res.render('newProperty.ejs', {
            tabTitle: 'Add Property',
        });
    });
    // CREATE //
    app.post('/vendom', (req, res) => {
        Property.create(req.body, (error, createdProperty) => {
            res.redirect('/vendom');
        });
    });
    // SHOW //
    app.get('/vendom/:id', (req, res) => {
        Property.findById(req.params.id, (error, foundProperty) => {
            res.render('propertyShow.ejs', {
                property: foundProperty,
                tabTitle: 'Property Information'
            });
        });
    });
    // INDEX //
    app.get('/vendom', (req, res) => {
        Property.find({}, (error, allProperties) => {
            res.render('mainIndex.ejs', {
                properties: allProperties,
                tabTitle: 'Home',
            });
        });
    });









// LISTENER //
app.listen(PORT, () => {
    console.log('Listening on Port ' + PORT);
})

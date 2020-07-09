const express = require('express');
const router = express.Router();
const Property = require('../models/propertySchema.js')

// ROUTES //
    // NEW //
    router.get('/vendom/add', (req, res) => {
        res.render('newProperty.ejs', {
            tabTitle: 'Add Property',
        });
    });
    // CREATE //
    router.post('/vendom', (req, res) => {
        Property.create(req.body, (error, createdProperty) => {
            res.redirect('/vendom');
        });
    });
    // SHOW //
    router.get('/vendom/:id', (req, res) => {
        Property.findById(req.params.id, (error, foundProperty) => {
            res.render('propertyShow.ejs', {
                property: foundProperty,
                tabTitle: 'Property Information',
            });
        });
    });
    // INDEX //
    router.get('/vendom', (req, res) => {
        Property.find({}, (error, allProperties) => {
            res.render('mainIndex.ejs', {
                properties: allProperties,
                tabTitle: 'Home',
            });
        });
    });
    // DELETE //
    router.delete('/vendom/:id', (req, res) => {
        Property.findByIdAndRemove(req.params.id, (error, data) => {
            res.redirect('/vendom');
        });
    });
    // EDIT //
    router.get('/vendom/:id/edit', (req, res) => {
        Property.findById(req.params.id, (error, foundProperty)=> {
            res.render(
                'editProperty.ejs',
                {
                    property: foundProperty,
                    tabTitle: 'Edit Property',
                },
            );
        });
    });
    // PUT //
    router.put('/vendom/:id', (req, res) => {
        Property.findByIdAndUpdate(req.params.id, req.body, {new:true}, (error, updatedModel) => {
            res.redirect('/vendom');
        });
    });


module.exports = router;
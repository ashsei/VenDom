const express = require('express');
const router = express.Router();
const Property = require('../models/propertySchema.js')

// ROUTES //

    // NEW //
    router.get('/add', (req, res) => {
        res.render('newProperty.ejs', {
            tabTitle: 'Add Property',
        });
    });
    // ABOUT //
    router.get('/about', (req, res) => {
        res.render('about.ejs', {
            tabTitle: 'About',
        });
    });
    // CREATE //
    router.post('/', (req, res) => {
        Property.create(req.body, (error, createdProperty) => {
            res.redirect('/vendom');
        });
    });
    // SHOW //
    router.get('/:id', (req, res) => {
        Property.findById(req.params.id, (error, foundProperty) => {
            res.render('propertyShow.ejs', {
                property: foundProperty,
                tabTitle: 'Property Information',
            });
        });
    });
    // INDEX //
    router.get('/', (req, res) => {
        Property.find({}, (error, allProperties) => {
            res.render('mainIndex.ejs', {
                properties: allProperties,
                tabTitle: 'Home',
            });
        });
    });
    
    // DELETE //
    router.delete('/:id', (req, res) => {
        Property.findByIdAndRemove(req.params.id, (error, data) => {
            res.redirect('/vendom');
        });
    });
    // EDIT //
    router.get('/:id/edit', (req, res) => {
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
    router.put('/:id', (req, res) => {
        Property.findByIdAndUpdate(req.params.id, req.body, {new:true}, (error, updatedModel) => {
            res.redirect('/vendom');
        });
    });


module.exports = router;
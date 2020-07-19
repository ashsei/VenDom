const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
    type: String,
    nickname: String,
    address: { type: String, required: true},
    img: { type: String, required: true},
    beds: { type: Number, required: true},
    baths: { type: Number, required: true},
    sqft: { type: Number, required: true},
    price: { type: Number, required: true},
    cost_basis: String,
    description: { type: String, required: true},
    listing: String,
});

const Property = mongoose.model('Property', propertySchema);

module.exports = Property;
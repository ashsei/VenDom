// SETUP //
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;

app.use(express.urlencoded({extended:true}));
mongoose.connect('mongodb://localhost:27017/vendom', { useNewUrlParser: true , useUnifiedTopology: true });
mongoose.connection.once('open', () => {
    console.log('Connected to Mongo');
});

// DATA //

// ROUTES //
    // NEW //
    app.get('/vendom/add', (req, res) => {
        res.render('newProperty.ejs', {
            tabTitle: 'Add Property',
        });
    });
    // CREATE //
    app.post('/vendom/', (req, res) => {
        res.send(req.body); 
    });














// LISTENER //
app.listen(PORT, () => {
    console.log('Listening on Port ' + PORT);
})

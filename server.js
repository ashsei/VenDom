// SETUP //
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.urlencoded({extended:true}));

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

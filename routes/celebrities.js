// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const Celebrity = require('../models/Celebrity.model');

// all your routes here

router.get('/create', (req, res, next) => {
    try {
        res.render('celebrities/new-celebrity');
    } 
    catch (error) {
        next(error)
    }
});

router.post('/create', async (req, res, next) => {
    try {
        const {name, occupation, catchPhrase} = req.body;
        await Celebrity.create({name, occupation, catchPhrase});
    }
    catch (error) {
        next(error)
    }
});

module.exports = router;
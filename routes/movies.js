// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const Celebrity = require('../models/Celebrity');
const Movie = require('../models/Movie');

// all your routes here

router.get('/', async (req, res, next) => {
    try {
        const movies = await Movie.find({});
        res.render('movies/movies', {movies})
    } catch (error) {
        next(error)
    }
});

router.get ("/create", async(req, res, next) => {
    try {
        const celebrities = await Celebrity.find({});
        res.render('movies/new-movie',{celebrities}); 
    }
    catch (error) {
        next(error)
    }
});

router.post("/create", async(req, res, next) => { 
    const {title, genre, plot, cast} = req.body;

    try {
        await Movie.create({title, genre, plot, cast});
        res.redirect('/movies');
    }
    catch(error) {
        res.redirect("movies/create");
        next(error)
    }

});














module.exports = router;
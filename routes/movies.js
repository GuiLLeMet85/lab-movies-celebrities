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


router.get("/:id", async(req, res, nexr) => {
    const {id} = req.params
    try {
        const movie = await Movie.findById(id).populate('cast')
        res.render('movies/movie-details', {movie})
    } catch (error) {
        next(error)
    }
});

router.post('/delete/:id', async (req, res, next) => {
    const {id} = req.params;
    try {
        await Movie.findByIdAndDelete(id);
        res.redirect('/movies')
    } catch (error) {
        next(error)
    }
});

router.get('/edit/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const moviesCast = await Movie.findById(id);
        const allCelebrities = await Celebrity.find();
        res.render("movies/edit-movie", { moviesCast, allCelebrities });
      } catch (error) {
        next(error);
      }
    });


router.post('/:id', async (req,res,next) => {
    const {id} = req.params;
    const {title, genre, plot, cast} = req.body;
    try {
        const updatedMovie = await Movie.findByIdAndUpdate(id, {title, genre, plot, cast});
        res.redirect(`/movies/${id}`);
    } catch (error) {
        next(error)
    }
})













module.exports = router;
// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const Celebrity = require('../models/Celebrity.model');

// all your routes here

// GET celebrities page 
router.get("/", async(req, res, next) => {
    const celebrities = await Celebrity.find({});
    try {
        res.render("celebrities/celebrities", { celebrities });
    } catch (error) {
        next(error);
    }
})

// Add a new celebrities
router.get('/create', (req, res, next) => {
    try {
        res.render('celebrities/new-celebrity');
    } catch (error) {
        next(error)
    }
});

router.post('/create', async(req, res, next) => {
    const { name, occupation, catchPhrase } = req.body;
    console.log(req.body);
    try {
        await Celebrity.create({ name, occupation, catchPhrase });
        res.redirect("/celebrities");
    } catch (error) {
        res.redirect("/celebrities/create");
    }
})

module.exports = router;
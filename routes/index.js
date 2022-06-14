const router = require("express").Router();


/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

// all your routes here

/*
router.get("/celebrities", requiere ("./celebrities.routes"));

router.get("/movies",requiere ("./movies.routes") );
*/

module.exports = router;
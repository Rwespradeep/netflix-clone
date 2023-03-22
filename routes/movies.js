const router = require("express").Router();
const Movie = require("../models/Movie");

const verify = require('../verifyToken')


//CREATE A MOVIE

router.post("/", verify, async (req, res) => {
    if (req.user.isAdmin) {
        const newMovie = new Movie(req.body);
        try {
            const savedMovie = await newMovie.save();
            res.status(200).json(savedMovie);
        } catch (err) {
            res.status(500).json(err)
        }
    } else {
        res.status(403).json("you are not allowed to create movies!")
    }
});


// UPDATE A MOVIE
router.put("/:id", verify, async (req, res) => {
    if (req.user.isAdmin) {
        try {
            const updatedMovie = await Movie.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
            res.status(200).json(updatedMovie);
        } catch (err) {
            res.status(500).json(err)
        }
    } else {
        res.status(403).json("you are not allowed to create movies!")
    }
});

// DELETE A MOVIE
router.delete("/:id", verify, async (req, res) => {
    if (req.user.isAdmin) {
        try {
            await Movie.findByIdAndDelete(req.params.id);
            res.status(200).json("Movie has been deleted successfully");
        } catch (err) {
            res.status(500).json(err)
        }
    } else {
        res.status(403).json("you are not allowed to create movies!")
    }
});

// GET A MOVIE
router.get("/find:id", verify, async (req, res) => {

    try {
        const movie = await Movie.findById(req.params.id);
        res.status(200).json(movie);
    } catch (err) {
        res.status(500).json(err)
    }

});


// GET RANDOM MOVIE

router.get("/random", verify, async (req, res) => {
    const type = req.query.type;
    let movie;
    try {
        if (type === "series") {
            movie = await Movie.aggregate([
                { $match: { isSeries: true } },
                { $sample: { size: 1 } },
            ]);
        }
        else {
            movie = await Movie.aggregate([
                { $match: { isSeries: false } },       //match - will take documents from db, that meets the condition of the query
                { $sample: { size: 1 } },              //size - it will randomly pick few documents from the selected db.
            ]);
        }
        res.status(200).json(movie);
    } catch (err) {
        res.status(500).json(err)
    }

});

//GET ALL MOVIES

router.get("/", verify, async (req, res) => {
    if (req.user.isAdmin) {
        try {
            const movies = await Movie.find();
            res.status(200).json(movies.reverse());
        } catch (err) {
            res.status(500).json(err)
        }
    } else {
        res.status(403).json("you are not allowed to fetch all movies!");
    }
});

module.exports = router;
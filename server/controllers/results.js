const express = require("express");
const router = express.Router();

const Result = require("../models/result");

router.get("/all", (req, res) => {
    const results = Result.all;
    res.send(results);
});

router.get("/:category", (req, res) => {
    const category = req.params.category;
    const results = Result.getByCategory(category);
    if (results.length > 0) res.send(results);
    else {
        const error = {
            message: "No matching results found for your query. Please search for programming or gaming",
        };
        res.send(error);
    }
});

module.exports = router;

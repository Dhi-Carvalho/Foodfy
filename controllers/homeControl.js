const recipes = require("../src/database/data")

exports.index = function(req, res) {
    return res.render("site/index", {items: recipes})
}

exports.about = function(req, res) {
    return res.render("site/about")
}

exports.cookbook = function(req, res) {
    return res.render("site/cookbook", {items: recipes})
}

exports.recipes = function(req,res) {
    const recipeId = req.params.index

    if (!recipes[recipeId]) {
        return res.render('not-found')
    }
    return res.render('site/recipes', { item: recipes[recipeId]})
}

exports.notfound = function(req,res){
    return res.status(404).render('site/not-found')
}
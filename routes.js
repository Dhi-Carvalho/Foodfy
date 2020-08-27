const express = require('express')
const routes = express.Router()
const home = require("./controllers/homeControl")
const recipes = require("./controllers/recipeControl")

routes.get("/", home.index)
routes.get("/about", home.about)
routes.get("/cookbook", home.cookbook)
routes.get("/recipes/:index", home.recipes)

routes.get("/admin/recipes/create", recipes.create)

routes.use(home.notfound)

module.exports = routes




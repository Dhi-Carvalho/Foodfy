const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const recipes = require("./src/database/data")

server.use(express.static("public"))

server.set("view engine", "njk")

nunjucks.configure("src/views", {
    express: server,
    noCache: true
})

server.get("/", function(req, res) {
    return res.render("index", {items: recipes})
})

server.get("/about", function(req, res) {
    return res.render("about")
})

server.get("/cookbook", function(req, res) {
    return res.render("cookbook", {items: recipes})
})

server.get("/recipes/:index", function(req,res) {
    const recipeId = req.params.index

    if (!recipes[recipeId]) {
        return res.render('not-found')
    }
    return res.render('recipes', { item: recipes[recipeId]})
})

server.use(function(req,res){
    return res.status(404).render('not-found')
  })

server.listen(5000, function(){
    console.log("server is running")
})
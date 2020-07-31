const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const recipes = require("./data")

server.use(express.static('public'))

server.set("view engine", "html")

nunjucks.configure("views", {
    express: server
})

server.get("/", function (req, res) {
    return res.render("index", {items: recipes})
})

server.get("/about", function (req, res) {
    return res.render("about")
})

server.get("/content", function (req, res) {
    return res.render("content", {items: recipes})
})

server.listen(5000, function() {
    console.log("server is runing")
})
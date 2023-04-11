const bodyParser = require('body-parser')
const autor = require( "./AutorRouter");
const livro = require("./LivrosRouter");

module.exports = (app) => {
    app.use(bodyParser.json(),
    autor,
    livro)
}
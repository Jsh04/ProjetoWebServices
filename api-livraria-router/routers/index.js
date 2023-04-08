const bodyParser = require("body-parser");
const autor = require( "./AutorRouter")

module.exports = (app) => {
    app.use(bodyParser.json()),
    app.use(autor)
}
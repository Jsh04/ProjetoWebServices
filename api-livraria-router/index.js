const express = require('express')
const routers = require('./routers/index.js');
const db = require('./db_ config.js')
const app = express();
const port = process.env.PORT || 3000;
routers(app)

db.sync(() => console.log(`Banco de dados conectado: ${process.env.DB_NAME}`));
app.get('/',(req, res) => {
    res.send("ola projeto node")
})
app.listen(port, () => {
    console.log(`Servidor ativo na porta ${port}`)
})

 

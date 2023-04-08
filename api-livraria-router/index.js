const express = require('express')
const routers = require('./routers/index.js');
const app = express();
const port = 3000;
routers(app)
app.listen(port, () => {
    console.log(`Servidor ativo na porta ${port}`)
})

 

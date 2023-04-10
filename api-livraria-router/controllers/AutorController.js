const database = require('../models')

class AutorController{
    static async listarAutores(req, res){
        try{
            const autores = await database.Autor.findAll();
            console.log("Passou aq")
            return res.status(200).json(autores);
        }catch(erro){
            console.log("Passou aq")
            return res.status(500).json(erro)
        }
    }

    static async criarAutor(req, res){
        const autorCadastrar = req.body;
        try{
            const autorCadastrado = await database.Autor.create(autorCadastrar)
            res.status(201).json(autorCadastrado);
        }catch(erro){
            return res.status(500).json(erro.message)
        }
    }
}

module.exports = AutorController;
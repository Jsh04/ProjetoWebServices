const database = require('../models');

class LivrosController{

    static async listarLivros(req, res){
        try {
            const livros = await database.Livros.findAll();
            res.status(200).json(livros)
        } catch (error) {
            res.status(500).json({mensagem: error})
        }
    }

    static async criarLivro(req, res){
        const livroCadastrar = req.body;
        try{
            const livroCadastrado = await database.Livros.create(livroCadastrar)
            res.status(201).json(livroCadastrado);
        }catch(erro){
            return res.status(500).json(erro.message)
        }
    }
}

module.exports = LivrosController;

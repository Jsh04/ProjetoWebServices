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

    static async atualizarLivro(req, res){
        const { id } = req.params;
        const  dadosAtualizar = req.body;
        try {
            await database.Livros.update(dadosAtualizar,{
                where: {
                    id: Number(id)
                }
            })
            //console.log(dadosAtualizar)
            const dadosAtualizados = await database.Livros.findOne({
                where: {
                    id: Number(id)
                }
            })
            console.log(dadosAtualizados);

            return res.status(200).json(dadosAtualizados);
        } catch (erro) {
            return res.status(500).json(erro.message)
        }
    }


    static async deletarLivro(req, res){
        const { id } = req.params;
        try {
            await database.Livros.destroy({where: {
                id:Number(id)
            }})
        res.status(204).send({message: `Autor do id: ${id} deletado com sucesso`})
        } catch (erro) {
            return res.status(500).json(erro.message)
        }
    }
}

module.exports = LivrosController;

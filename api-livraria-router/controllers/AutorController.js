const database = require('../models')

class AutorController{
    static async listarAutores(req, res){
        try{
            const autores = await database.Autor.findAll();
            return res.status(200).json(autores);
        }catch(erro){
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

    static async deletarAutor(req, res){
        const { id } = req.params;
        try {
            await database.Autor.destroy({where: {
                id:Number(id)
            }})
        res.status(204).send({message: `Autor do id: ${id} deletado com sucesso`})
        } catch (erro) {
            return res.status(500).json(erro.message)
        }
    }

    static async atualizarAutor(req, res){
        const { id } = req.params;
        const { dadosAtualizar } = req.body;
        try {
            await database.Autor.update(dadosAtualizar,{
                where: {
                    id: Number(id)
                }
            })

            const dadosAtualizados = await database.Autor.findOne({
                where: {
                    id: Number(id)
                }
            })

            return res.status(200).json(dadosAtualizados);
        } catch (erro) {
            return res.status(500).json(erro.message)
        }
    }
}

module.exports = AutorController;
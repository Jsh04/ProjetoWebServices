const AutorRepository = require('../models')

class AutorController{
    static async listarAutor(req, res){
        try{
            const autores = await AutorRepository.Autor.findAll();
            console.log("Passou aq")
            return res.status(200).json(autores);
        }catch(erro){
            console.log("Passou aq")
            return res.status(500).json(erro)
        }
    }
}

module.exports = AutorController;
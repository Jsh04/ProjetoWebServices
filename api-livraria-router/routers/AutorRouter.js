const { Router}  = require('express');
const autorController = require('../controllers/AutorController.js');

const router = Router();

router.get('/autor', autorController.listarAutores);
router.post('/autor', autorController.criarAutor);
router.put('/autor/:id', autorController.atualizarAutor);
router.delete('/autor/:id', autorController.deletarAutor);

module.exports = router;
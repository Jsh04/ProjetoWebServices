const { Router } = require('express');
const livrosController = require('../controllers/LivrosController');

const router = Router()

router.get('/livros', livrosController.listarLivros);
router.post('/livros', livrosController.criarLivro);
router.put('/livros/:id', livrosController.atualizarLivro);
router.delete('/livros/:id', livrosController.deletarLivro)

module.exports = router;


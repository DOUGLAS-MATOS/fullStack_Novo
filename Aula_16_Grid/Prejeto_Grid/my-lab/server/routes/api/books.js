const express = require('express');

const router = express.Router();

//Carrega o Book Model(schema)
const Book = require('../../models/Book');

//GET api/books/test
//teste de rota Livros
router.get('/test', (req, res) => res.send({ msg: 'Testando a rota book'}));


//GET api/books
//pegar todos os livros
router.get('/', (req, res) => {
    Book.fing()
        .then(books => res.json(books))
        .catch(err => res.status(404).json({ nobooksfound: 'Nenhum Livro Encontrado!' }));
});

//GET api/books/:id
//Pegar único livreo por ID
router.get('/', (req, res) => {
    Book.findById(req.params.id)
        .then(book => res.json(book))
        .catch(err => res.status(404).json({ nobooksfound: 'Nenhum Livro Encontrado!'}));
});

//POST api/books
//Adicionar/Salvar Livro
router.post('/', (req, res) => {
    Book.create(req.body)
        .then(book => res.json({msg: 'Livro Adicionado com Sucesso!!'}))
        .catch(err => res.status(404).json({ error: 'Não foi possível Adicionar este Livro!!'}))
});

//PUT api/books/:id
//Atualizar o Livro
router.put('/:id', (req, res) => {
    Book.findByIdAndUpdate(req.params.id, req.body)
    .then(book => res.json({ msg: 'Livro Atualizado com Sucesso!!'}))
    .catch(err => res.status(404).json({ error: 'Não foi possível atualizar a Base de Dados!!'}));
});

//DELETE api/books/:id
//Deletar o Livro por id
router.delete('/:id', (req, res) => {
    Book.findByIdAndDelete(req.params.id, req.body)
        .then(book => res.json({ msg: 'Livro Deletado com Sucesso!!'}))
        .catch(err => res.status(404).json({ error: 'Não existe!!'}));
});

modole.exports = router;
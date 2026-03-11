const express = require('express');

const router = express.Router();

//Aqui irá carregar o Book Model (schema)
const Book = require('../models/Book');

//Get api/books/test
//tests de rota livros
router.get('/test', (req, res) => res.send({ msg: 'Testando rota book' }));


//GET api/books
//pegar todos os livros

router.get('/', (req, res) => {
    Book.find()
        .then(books => res.json(books))
        .catch(err => res.status(404).json({ nobookfound: 'Nenhum Livro Encontrado' }));
});

//GET api/books/:id
//Pegar unico livro por ID

router.get('/:id', (req, res) => {
    Book.findById(req.params.id)
        .then(book => res.json(book))
        .catch(err => res.status(404).json({nobooksfound: 'Nenhum Livro Encontrado'}))
});

//POST api/books
//Adicionar/Salvar Livros

router.post('/', (req, res) => {
    Book.create(req.body)
    .then(book => res.json({msg: 'Livro Adicionar com Sucesso'}))
    .catch(err => res.status(404).json({ error: 'Não foi possível Adicionar o livro'}));
});

//PUT api/books/:id
//Atualizar o livro

router.put('/', (req, res) => {
    Book.findByIdAndUpdate(req.params.id, req.body)
    .then(book => res.json({msg: 'Livro Atualizado com Sucesso!!'}))
    .catch(err => res.status(404).json({ error: 'Não foi possível atuallizar o Livro'}))
});

//DELETE api/books/:id
//Deletar o Livro por id

router.delete('/', (req, res) => {
    Book.findByIdDelete(req.params.id, req.body)
    .then(book => res.json({msg: 'Livro Apagado com Sucesso!!!'}))
    .catch(err => res.status(404).json({ erro: 'Não Existe este Livro!!!'}))
});

module.exports = router;
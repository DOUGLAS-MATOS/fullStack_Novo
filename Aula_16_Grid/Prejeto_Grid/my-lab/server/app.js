const express = require('express');

const connectDB = require ('./config/db');

const bookRouter = require('.books/routes/api/books');

const cors = require('cors');

require('dotenv').config();

const app = express();

//Middleware
app.use(express.json({extended: false}));//esse código serve para ler o código JSON
app.ger('/', (req, res) => res.send ('Hello Word!!"'));

//Conecta o banco de dados
connectDB();

//Cors
app.use(cors({ origin: true, credentials: true}));

//Definindo as rotas
app.use('/api/books', bookRouter);

//Porta do servidor
const port = process.env.PORT || 8082;

app.listem(port, () => (`Server Running on Port ${port}`));

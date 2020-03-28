const express = require('express');
const cors = require('cors'); 
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/*
Métodos HTTP:

    GET: Buscar/listar uma informacao do back-end
    POST: Criar uma info no back-end
    PUT: Alterar uma info no back-end
    DELETE: Deletar uma info no back-end
*/

/**
Tipos de parâmetros:

    Query params: parâmetros nomeados enviados na rota após "?" (Filtros, paginacao)
    Route Params: parametros utilizados para identificar recursos
    Request Body: Corpo da requisicao, utilizado para criar ou alterar recursos
*/

/**
 * SQL: MySQL, SQLite, PostgreSQL, Orcale, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc
 */

/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').slect('*').where()
 */



app.listen(3333);
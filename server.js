//Importando as bibliotecas
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');

//Configurando as variáveis de ambiente
dotenv.config();

//Iniciando uma nova aplicação Express
const app = express();

//Configurando o CORS e o body-parser
app.use(cors());
app.use(bodyParser.json());

//Conectando o banco de dados e requerendo transações
const inventory_db = require('./config/inventory_db');
const transactionsRoutes = require('./routes/transactions');
app.use('/api/transactions', transactionsRoutes);

//Rota inicial para teste do servidor
app.get('/',(req, res) => {
    res.send('Servidor OK!');
});

//Configurando o servidor para trabalhar em uma porta específica
const PORT = process.envPORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor online na porta ${PORT}.`);
});
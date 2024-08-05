//Importar a biblioteca mysql2 e criar a conexão com o banco de dados
const mysql = require('mysql2');

const inventory_db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

inventory_db.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
        return;
    }
    console.log('Conectado ao banco de dados Inventory.')
});

module.exports = inventory_db;
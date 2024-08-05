const inventory_db = require('../config/inventory_db');

//Funções
const allTransactions = (req, res) => {
    inventory_db.query('SELECT * FROM products', (err, results) => {
        if (err) {
            console.error('Erro ao obter todas as trasações.', err);
            res.status(500).send('Erro ao obter todas as trasações.');
            return;
        }
        res.json(results);
    });
};

const addTransaction = (req, res) => {
    const {name, description, category, price, stock, expiry_date} = req.body;
    inventory_db.query('INSERT INTO products (name, description, category, price, stock, expiry_date) VALUES (?, ?, ?, ?, ?, ?)',
    [name, description, category, price, stock, expiry_date],
        (err, results) => {
            if (err) {
                console.error('Erro ao adicionar a transação.', err);
                res.status(500).send('Erro ao adicionar a transação.');
                return;
            }
            res.status(201).send('Transação adicionada com sucesso!');
        }
    );
};

const attTransactionTotal = (req, res) => {
    const {id} = req.params;
    const {name, description, category, price, stock, expiry_date} = req.body;
    inventory_db.query('UPDATE products SET name = ?, description = ?, category = ?, price = ?, stock = ?, expiry_date = ? WHERE id = ?',
    [name, description, category, price, stock, expiry_date, id],
        (err, results) => {
            if (err) {
                console.error('Erro na atualização da transação.', err);
                res.status(500).send('Erro na atualização da transação.');
                return;
            }
            res.send('Transação atualizada com sucesso!');
        }
    );
};

const attTransactionParcial = (req, res) => {
    const {id} = req.params;
    const fields = req.body;
    const query = [];
    const values = [];
    for (const [key, value] of Object.entries(fields)){
        query.push(`${key} = ?`);
        values.push(value);
    }
    values.push(id);
    inventory_db.query(`UPDATE products SET ${query.join(',')} WHERE id = ?`,
    values,
        (err, results) => {
            if (err) {
                console.error('Erro na atualização da transação.', err);
                res.status(500).send('Erro na atualização da transação.');
                return;
            }
            res.send('Transação atualizada com sucesso!');
        }
    );
};

const delTransaction = (req, res) => {
    const {id} = req.params;
    inventory_db.query('DELETE FROM products WHERE id = ?',
    [id],
        (err, results) => {
            if (err) {
                console.error('Erro ao deletar transação.', err);
                res.status(500).send('Erro ao deletar transação.');
                return;
            }
            res.send('Transação deletada com sucesso!');
        }
    );
};


module.exports = {
    allTransactions,
    addTransaction,
    attTransactionTotal,
    attTransactionParcial,
    delTransaction
};
const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 80;

const dbConfig = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb',
};

const conn = mysql.createConnection(dbConfig);

const createTableSql =
  'CREATE TABLE IF NOT EXISTS peoples (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255))';

conn.query(createTableSql);

app.use(express.json());

app.post('/people/create', (req, res) => {
  const { name } = req.body;

  const insertSQL = `INSERT INTO peoples (name) VALUES (?)`;
  conn.query(insertSQL, [name], err => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Erro ao criar usuário' });
      return;
    }

    res.status(201).json({ message: 'Usuário criado' });
  });
});

app.get('/', (_, res) => {
  const getAllSQL = `SELECT * FROM peoples`;
  conn.query(getAllSQL, (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send('Erro ao buscar usuário no banco de dados');
      return;
    }
    const userList = results.map(user => `<li>${user.name}</li>`).join('\n');
    const responseHTML = `<h1>Full Cycle</h1>\n<h2>Lista de Usuários</h2>\n<ul>${userList}</ul>`;
    res.status(200).send(responseHTML);
  });
});

app.listen(port, () => console.log('listening on port', port));

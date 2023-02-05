const express = require('express');

const app = express();

const port = 3000;

const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};

const mysql = require('mysql');

const connection = mysql.createConnection(config);

const sql = `INSERT INTO people(name) values('Felipe Gonçalves');`;
connection.query(sql);

app.get('/', (req,res) => {
    let list = '<h3>- Lista de nomes cadastrada no banco de dados</h3><ul>';

    connection.query('SELECT name FROM people', (err, result) => {
        if (err) console.log(err);
        result.forEach(element => {
            list += `<li>${element.name}</li>`;
        });
        list += '</ul>';
        res.send('<h1>Full Cycle Rocks!</h1>' + list)
    });
})

app.listen(port, () => {
    console.log('listening on port: ' + port)
})
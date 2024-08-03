var mysql = require('mysql');
const express = require('express')
const app = express()

const port = 3000


var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '1234'
});

app.use(express.json())
app.post('/user', (req, res) => {

    const { nome, senha } = req.body
    if (!nome || !senha ) {
        res.status(400).json({message: "Os campos conta e saldo obrigatóriods"})
    }

    connection.query(
        `INSERT INTO cadastro (nome, senha, email) VALUES (${nome}, ${senha})`, 
         function(err, rows, fields
        ) {
      if (err) throw err;
      res.status(201).json(req.body)
    });

    res.json(req.body)
})

app.post('/user/login', (req, res) => {
    res.json({
      "username": "teste",
      "password":"1234"
    })
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
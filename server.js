// server-min.js
const express = require('express');
const mysql = require('mysql2');
const app = express();

app.use(express.json());
app.use(express.static('public'));

const db = mysql.createConnection({
    host: '',
    user: 'root',
    password: '1234567',
    database: 'itau',
    port: 3303
});

db.connect((err) => {
    if (err) throw err;
    console.log('✅ Conectado ao MySQL!');
});

app.post('/api/cadastrar', (req, res) => {
    const { nome, email, senha } = req.body;
    
    db.query(
        'INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)',
        [nome, email, senha],
        (err, result) => {
            if (err) {
                if (err.code === 'ER_DUP_ENTRY') {
                    return res.status(409).json({ 
                        success: false, 
                        message: 'Email já cadastrado' 
                    });
                }      
                return res.status(500).json({ 
                    success: false,                   
                    message: 'Erro no servidor'           
                });                               
            }
            res.json({ 
                success: true, 
                message: 'Cadastrado com sucesso!' 
            });
        }
    );
});

app.listen(3000, () => console.log('🚀 Servidor: http://localhost:3000'));
      

      

      

CREATE DATABASE itau;
USE itau;

CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

SELECT * FROM itau.usuarios;
DELETE FROM itau.usuarios WHERE email = 'corretorainvestimentos3900@gmail.com';

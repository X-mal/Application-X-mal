/**
*Criar o banco
*/
CREATE DATABASE EDAD;
/**
* Mover para o banco de dados
*/
USE EDAD;

/**
* Tabela de Usuario Aluno faculdade
* Autor:
* - Caio
* Ultima atualização:
*/


/**
* Tabela de Usuario Aluno Escola
* Autor:
* - Jorge
* Ultima atualização:
*/
CREATE TABLE userE(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(250) NOT NULL,
    email VARCHAR(250) NOT NULL,
    PASS VARCHAR(250) NOT NULL,
    Curso VARCHAR(255) NOT NULL,
    Turno int NOT NULL
    estado VARCHAR(255) NOT NULL
);

/**
* Tabela de Usuario Admin
* Autor:
* - Adson
* Ultima atualização:
*/

/**
* Tabela de arquivos
* Autor:
* - Jorge
* Ultima atualização: 14/08/2026
-- */
CREATE TABLE arquivos(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    Username VARCHAR(255) NOT NULL,
    Readname VARCHAR(255) not NULL,
    email VARCHAR(255) NOT NULL,
    PASS VARCHAR(255) NOT NULL,
    estado VARCHAR(255) NOT NULL,
    resposta VARCHAR(255) NOT NULL
);


INSERT INTO user(username,email,PASS) VALUES ("Jorgejbf","jorgejbf@gmail.com",MD5("123"));
INSERT INTO arquivos(Username) VALUES (1);

SELECT u.username , a.id from usere u LEFT JOIN points p ON u.id = a.username;


-- Base de Exemplo
-- CREATE TABLE users(
--     id INT NOT NULL PRIMARY KEY,
--     username VARCHAR(250) NOT NULL,
--     email VARCHAR(250) NOT NULL,
--     PASS VARCHAR(250) NOT NULL,
--     youtube_id VARCHAR(250),
--     twitch_id VARCHAR(250),
--     status ENUM('ativo', 'inativo') NOT NULL DEFAULT 'ativo'


/*
Criar o banco
-- */
-- CREATE DATABASE pointstore;

/*
 Tabela de Usuarios
 Autor:
    - Kevin da Costa Vinagre
Ultima atualização: 13-08-2026/19:47
*/

-- CREATE TABLE pointstore.users(
--     id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
--     username VARCHAR(250) NOT NULL,
--     email VARCHAR(250) NOT NULL,
--     PASS VARCHAR(250) NOT NULL,
--     youtube_id VARCHAR(250),
--     twitch_id VARCHAR(250),
--     status ENUM('ativo', 'inativo') NOT NULL DEFAULT 'ativo'

-- );

/*
Tabela de Pontos
 Autor:
    - Kevin da Costa Vinagre
Ultima atualização: 13-08-2026/19:47
*/

-- CREATE TABLE pointstore.points(
--     id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
--     user INT NOT NULL,
--     ammount FLOAT DEFAULT 0.0,
--     CONSTRAINT fk_user
--     FOREIGN KEY (user)
--     REFERENCES users(id)

-- );

/*
Tabela de Recompensa
 Autor:
    - Kevin da Costa Vinagre
Ultima atualização: 13-08-2026/19:47
*/

-- CREATE TABLE pointstore.rewards(
--     id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
--     name VARCHAR(255) NOT NULL,
--     description TEXT,
--     cost FLOAT NOT NULL,
--     stock INT DEFAULT 0
-- );

/*
Tabela de Resgates
 Autor:
    - Kevin da Costa Vinagre
Ultima atualização: 13-08-2026/19:47
*/

-- CREATE TABLE pointstore.redemptions(
--     id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
--     user INT NOT NULL,
--     reward INT NOT NULL,
--     create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--     CONSTRAINT fk_user_redemptions
--     FOREIGN KEY (user)
--     REFERENCES users(id),
--     CONSTRAINT fk_reward_redemptions
--     FOREIGN KEY (reward)
--     REFERENCES rewards(id)
-- );

-- /*
-- Tabela usuarios
-- */

-- INSERT INTO users(username,email,PASS) VALUES ("KevinAzedo","kevin.cv.br@gmail.com",MD5("123"));
-- INSERT INTO points(user) VALUES (1);

-- SELECT u.username , p.ammount from users u LEFT JOIN points p ON u.id = p.user WHERE u.username = "KevinAzedo";


CREATE DATABASE EDAD;
USE EDAD;

CREATE TABLE userE(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(250) NOT NULL,
    email VARCHAR(250) NOT NULL,
    PASS VARCHAR(250) NOT NULL,
    Curso VARCHAR(255) NOT NULL,
    Turno int NOT NULL,
    estado VARCHAR(255) NOT NULL
);

CREATE TABLE arquivos(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(255) NOT NULL,
    Readname VARCHAR(255) not NULL,
    email VARCHAR(255) NOT NULL,
    PASS VARCHAR(255) NOT NULL,
    estado VARCHAR(255) NOT NULL,
    resposta VARCHAR(255) NOT NULL
);


INSERT INTO user(username,email,PASS) VALUES ("Jorgejbf","jorgejbf@gmail.com",MD5("123"));
INSERT INTO arquivos(username) VALUES (1);

SELECT u.username , a.id from usere u LEFT JOIN points p ON u.id = a.username;

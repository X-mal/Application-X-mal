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
CREATE TABLE userFac(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT UNIQUE,
    RA VARCHAR(255) NOT NULL UNIQUE,
     nome VARCHAR(255) NOT NULL,
    PASS VARCHAR(250) NOT NULL,
    curso VARCHAR(255) NOT NULL,
    turno ENUM('matutino', 'noturno') NOT NULL,
    situacao ENUM('cursando', 'trancado') NOT NULL DEFAULT 'cursando'
);

/**
* Tabela de Usuario Aluno Tecnico
* Autor:
* - Jorge
* Ultima atualização:
*/
CREATE TABLE userTec(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT UNIQUE,
    RA VARCHAR(255) NOT NULL UNIQUE,
    nome VARCHAR(255) NOT NULL,
    PASS VARCHAR(250) NOT NULL,
    curso VARCHAR(255) NOT NULL,
    turno ENUM('matutino', 'noturno') NOT NULL,
    situacao ENUM('cursando', 'trancado') NOT NULL DEFAULT 'cursando'
);

/**
* Tabela de Usuario Admin
* Autor:
* - Adson
* Ultima atualização:
*/
CREATE TABLE userADM(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT UNIQUE,
    username VARCHAR(250) NOT NULL,
    email VARCHAR(250) NOT NULL,
    PASS VARCHAR(250) NOT NULL,
    setor ENUM('faculdade', 'tecnico')
);
/**
* Tabela de arquivos
* Autor:
* - Jorge
* Ultima atualização: 14/08/2026
-- */
CREATE TABLE arquivos(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT UNIQUE,
    descricao VARCHAR(255) NOT NULL,
    estado ENUM('recebido','negado','aprovado') NOT NULL DEFAULT 'recebido',
    idtec INT,
    idfac INT,
    arquivo VARCHAR(255) unique,
    CONSTRAINT fk_userTec
    FOREIGN KEY (idtec)
    REFERENCES userTec(id),
    CONSTRAINT fk_userFac
    FOREIGN KEY (idfac)
    REFERENCES userFac(id)
);

CREATE TABLE resp(
    id int NOT Null UNIQUE PRIMARY Key AUTO_INCREMENT,
    respota text not null,
    arquivo int NOT NULL,
    adm int NOT NULL,
    CONSTRAINT fk_arquivos_resp
    FOREIGN KEY (arquivo)
    REFERENCES arquivos(id),
    CONSTRAINT fk_adm_resp
    FOREIGN KEY (adm)
    REFERENCES userADM(id)
);

CREATE TABLE audit(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    operation_type ENUM('insert','update','delete') NOT NULL,
    old_data JSON,
    new_data JSON
    issuer_id INT NOT NULL,
    operation_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_users_audit
    FOREIGN KEY (issuer_id)
    REFERENCES userTec(id)
);


SELECT ut.RA , a.id from usertec ut LEFT JOIN arquivos a ON ut.id = a.idtec;



DELIMITER $$
    CREATE PROCEDURE add_arquivos_audit(
        IN p_descricao VARCHAR(255),
        IN p_resposta text,
        IN p_idtec INT,
        IN p_idfac INT,
        IN p_arquivo VARCHAR(255)

    )
BEGIN
    -- SET t_id = (SELECT id FROM userTec WHERE RA = t_RA);
    SET t_RA = LAST_INSERT_ID();
    INSERT INTO arquivos(descricao,idtec,idfac,arquivo) VALUES (p_descricao,p_idtec,p_idfac,p_arquivo);

    SELECT "Mensagem enviada com sucesso";

END $$
CALL add_arquivos_audit("teste1base","resp",1,NULL,"arquivo teste PDF fake");


INSERT INTO usertec(RA,PASS,curso,turno) VALUES ("Jorgejbf",MD5("123"),"informatica","noturno");
INSERT INTO arquivos(descricao,idtec,idfac) VALUES ('Em analise','1','1');

    INSERT INTO userTec(RA,PASS,curso,turno,situacao) VALUES (t_RA,t_PASS,t_curso,t_turno,t_situacao);

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


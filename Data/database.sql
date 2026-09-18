USE EDAD;

CREATE TABLE userTec(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT UNIQUE,
    RA VARCHAR(255) NOT NULL UNIQUE,
    username VARCHAR(250) NOT NULL,
    email VARCHAR(250) NOT NULL,
    PASS VARCHAR(250) NOT NULL,
    curso VARCHAR(255) NOT NULL,
    turno ENUM('matutino', 'noturno') NOT NULL,
    situacao ENUM('cursando', 'trancado') NOT NULL DEFAULT 'cursando'
);

CREATE TABLE userFac(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT UNIQUE,
    RA VARCHAR(255) NOT NULL UNIQUE,
    username VARCHAR(250) NOT NULL,
    email VARCHAR(250) NOT NULL,
    PASS VARCHAR(250) NOT NULL,
    curso VARCHAR(255) NOT NULL,
    turno ENUM('matutino', 'noturno') NOT NULL,
    situacao ENUM('cursando', 'trancado') NOT NULL DEFAULT 'cursando'
);

CREATE TABLE userADM(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT UNIQUE,
    username VARCHAR(250) NOT NULL,
    email VARCHAR(250) NOT NULL,
    PASS VARCHAR(250) NOT NULL,
    setor ENUM('faculdade', 'tecnico')
);

CREATE TABLE arquivos(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT UNIQUE,
    descricao VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    PASS VARCHAR(255) NOT NULL,
    estado ENUM('recebido','negado','aprovado') NOT NULL DEFAULT 'recebido',
    idtec INT NOT NULL,
    idfac INT NOT NULL,
    resposta VARCHAR(255) NOT NULL,
    CONSTRAINT fk_userTec,
    FOREIGN KEY (idtec),
    REFERENCES userTec(id),
    CONSTRAINT fk_userFac,
    FOREIGN KEY (idfac),
    REFERENCES userFac(id)
);


CREATE TABLE resp(
    id int NOT Null UNIQUE PRIMARY Key AUTO_INCREMENT,
    respota text not null,
    arquivo int NOT NULL,
    adm int NOT NULL,
    CONSTRAINT fk_arquivos_resp,
    FOREIGN KEY (arquivo),
    REFERENCES arquivos(id),
    CONSTRAINT fk_adm_resp,
    FOREIGN KEY (adm),
    REFERENCES userADM(id)
);

INSERT INTO usertec(RA,PASS,curso,turno) VALUES ("Jorgejbf",MD5("123"),"informatica","noturno");
INSERT INTO arquivos(descricao,idtec,idfac) VALUES ('Em analise','1','1');

SELECT ut.RA , a.id from usertec ut LEFT JOIN arquivos a ON ut.id = a.idtec;



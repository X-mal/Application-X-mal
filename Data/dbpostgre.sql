-- =====================================================================
-- Banco de dados: EDAD
-- Traduzido de MySQL para PostgreSQL (compatível com Supabase)
-- =====================================================================
-- Observações:
-- 1. Removi CREATE DATABASE/USE: no Supabase o banco já existe, você
--    trabalha direto no schema "public" (ou em um schema próprio).
-- 2. AUTO_INCREMENT -> SERIAL.
-- 3. ENUM inline do MySQL não existe no Postgres: criei tipos ENUM
--    nomeados via CREATE TYPE.
-- 4. Corrigi a sintaxe de FOREIGN KEY, que estava quebrada no
--    original (FOREIGN KEY e REFERENCES não podem ser cláusulas
--    separadas por vírgula).
-- 5. MD5() funciona no Postgres via extensão pgcrypto, mas para senha
--    em produção recomendo crypt()/bcrypt em vez de MD5 (MD5 é
--    inseguro para hash de senha). Deixei MD5 aqui só para manter o
--    comportamento equivalente ao script original.
-- 6. O arquivo que você mandou tinha um segundo bloco no final
--    recriando "userTec" e "arquivos" com uma estrutura diferente e
--    incompatível (sem idtec/idfac). Não incluí esse trecho aqui por
--    parecer um rascunho duplicado/desatualizado — me avisa se ele
--    também precisa entrar.
-- =====================================================================

-- Extensão necessária para md5()/crypt() em algumas instalações
CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- ---------------------------------------------------------------------
-- Tipos ENUM (equivalentes aos ENUM inline do MySQL)
-- ---------------------------------------------------------------------
CREATE TYPE turno_enum AS ENUM ('matutino', 'noturno');
CREATE TYPE situacao_enum AS ENUM ('cursando', 'trancado');
CREATE TYPE estado_arquivo_enum AS ENUM ('recebido', 'negado', 'aprovado');
CREATE TYPE setor_enum AS ENUM ('faculdade', 'tecnico');

-- ---------------------------------------------------------------------
-- Tabela de Usuário Aluno Técnico
-- ---------------------------------------------------------------------
CREATE TABLE userTec (
    id        SERIAL PRIMARY KEY,
    RA        VARCHAR(255) NOT NULL UNIQUE,
    username  VARCHAR(250) NOT NULL,
    email     VARCHAR(250) NOT NULL,
    PASS      VARCHAR(250) NOT NULL,
    curso     VARCHAR(255) NOT NULL,
    turno     turno_enum NOT NULL,
    situacao  situacao_enum NOT NULL DEFAULT 'cursando'
);

-- ---------------------------------------------------------------------
-- Tabela de Usuário Aluno Faculdade
-- ---------------------------------------------------------------------
CREATE TABLE userFac (
    id        SERIAL PRIMARY KEY,
    RA        VARCHAR(255) NOT NULL UNIQUE,
    username  VARCHAR(250) NOT NULL,
    email     VARCHAR(250) NOT NULL,
    PASS      VARCHAR(250) NOT NULL,
    curso     VARCHAR(255) NOT NULL,
    turno     turno_enum NOT NULL,
    situacao  situacao_enum NOT NULL DEFAULT 'cursando'
);

-- ---------------------------------------------------------------------
-- Tabela de Usuário Admin
-- ---------------------------------------------------------------------
CREATE TABLE userADM (
    id        SERIAL PRIMARY KEY,
    username  VARCHAR(250) NOT NULL,
    email     VARCHAR(250) NOT NULL,
    PASS      VARCHAR(250) NOT NULL,
    setor     setor_enum
);

-- ---------------------------------------------------------------------
-- Tabela de Arquivos
-- ---------------------------------------------------------------------
CREATE TABLE arquivos (
    id         SERIAL PRIMARY KEY,
    descricao  VARCHAR(255) NOT NULL,
    estado     estado_arquivo_enum NOT NULL DEFAULT 'recebido',
    idtec      INT NOT NULL,
    idfac      INT NOT NULL,
    CONSTRAINT fk_userTec FOREIGN KEY (idtec) REFERENCES userTec(id),
    CONSTRAINT fk_userFac FOREIGN KEY (idfac) REFERENCES userFac(id)
);

-- ---------------------------------------------------------------------
-- Tabela de Respostas
-- ---------------------------------------------------------------------
CREATE TABLE resp (
    id        SERIAL PRIMARY KEY,
    resposta  TEXT NOT NULL,
    arquivo   INT NOT NULL,
    adm       INT NOT NULL,
    CONSTRAINT fk_arquivos_resp FOREIGN KEY (arquivo) REFERENCES arquivos(id),
    CONSTRAINT fk_adm_resp FOREIGN KEY (adm) REFERENCES userADM(id)
);

-- ---------------------------------------------------------------------
-- Dados de exemplo
-- ---------------------------------------------------------------------
INSERT INTO userTec (RA, username, email, PASS, curso, turno)
VALUES ('Jorgejbf', 'Jorgejbf', 'jorgejbf@gmail.com', md5('123'), 'informatica', 'noturno');

INSERT INTO arquivos (descricao, idtec, idfac)
VALUES ('Em analise', 1, 1);

-- ---------------------------------------------------------------------
-- Consulta de exemplo
-- ---------------------------------------------------------------------
SELECT ut."ra", a.id
FROM userTec ut
LEFT JOIN arquivos a ON ut.id = a.idtec;

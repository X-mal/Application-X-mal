-- CreateEnum
CREATE TYPE "estado_arquivo_enum" AS ENUM ('recebido', 'negado', 'aprovado');

-- CreateEnum
CREATE TYPE "setor_enum" AS ENUM ('faculdade', 'tecnico');

-- CreateEnum
CREATE TYPE "situacao_enum" AS ENUM ('cursando', 'trancado', 'finalizado');

-- CreateEnum
CREATE TYPE "turno_enum" AS ENUM ('matutino', 'noturno');

-- CreateEnum
CREATE TYPE "estado_adm_enum" AS ENUM ('ativo', 'inativo');

-- CreateTable
CREATE TABLE "arquivos" (
    "id" SERIAL NOT NULL,
    "descricao" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "pass" VARCHAR(255) NOT NULL,
    "estado" "estado_arquivo_enum" NOT NULL DEFAULT 'recebido',
    "idtec" INTEGER NOT NULL,
    "idfac" INTEGER NOT NULL,
    "resposta" VARCHAR(255) NOT NULL,

    CONSTRAINT "arquivos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "resp" (
    "id" SERIAL NOT NULL,
    "resposta" TEXT NOT NULL,
    "arquivo" INTEGER NOT NULL,
    "adm" INTEGER NOT NULL,

    CONSTRAINT "resp_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "useradm" (
    "id" SERIAL NOT NULL,
    "username" VARCHAR(250) NOT NULL,
    "email" VARCHAR(250) NOT NULL,
    "pass" VARCHAR(250) NOT NULL,
    "setor" "setor_enum" NOT NULL DEFAULT 'tecnico',
    "estado" "estado_adm_enum" NOT NULL DEFAULT 'ativo',

    CONSTRAINT "useradm_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "userfac" (
    "id" SERIAL NOT NULL,
    "ra" VARCHAR(255) NOT NULL,
    "username" VARCHAR(250) NOT NULL,
    "email" VARCHAR(250) NOT NULL,
    "pass" VARCHAR(250) NOT NULL,
    "curso" VARCHAR(255) NOT NULL,
    "turno" "turno_enum" NOT NULL,
    "situacao" "situacao_enum" NOT NULL DEFAULT 'cursando',

    CONSTRAINT "userfac_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "usertec" (
    "id" SERIAL NOT NULL,
    "ra" VARCHAR(255) NOT NULL,
    "username" VARCHAR(250) NOT NULL,
    "email" VARCHAR(250) NOT NULL,
    "pass" VARCHAR(250) NOT NULL,
    "curso" VARCHAR(255) NOT NULL,
    "turno" "turno_enum" NOT NULL,
    "situacao" "situacao_enum" NOT NULL DEFAULT 'cursando',

    CONSTRAINT "usertec_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "userfac_ra_key" ON "userfac"("ra");

-- CreateIndex
CREATE UNIQUE INDEX "usertec_ra_key" ON "usertec"("ra");

-- AddForeignKey
ALTER TABLE "arquivos" ADD CONSTRAINT "fk_userfac" FOREIGN KEY ("idfac") REFERENCES "userfac"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "arquivos" ADD CONSTRAINT "fk_usertec" FOREIGN KEY ("idtec") REFERENCES "usertec"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "resp" ADD CONSTRAINT "fk_adm_resp" FOREIGN KEY ("adm") REFERENCES "useradm"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "resp" ADD CONSTRAINT "fk_arquivos_resp" FOREIGN KEY ("arquivo") REFERENCES "arquivos"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

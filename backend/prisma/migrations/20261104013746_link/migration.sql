/*
  Warnings:

  - You are about to drop the column `email` on the `arquivos` table. All the data in the column will be lost.
  - You are about to drop the column `idfac` on the `arquivos` table. All the data in the column will be lost.
  - You are about to drop the column `idtec` on the `arquivos` table. All the data in the column will be lost.
  - You are about to drop the column `pass` on the `arquivos` table. All the data in the column will be lost.
  - You are about to drop the column `resposta` on the `arquivos` table. All the data in the column will be lost.
  - You are about to alter the column `resposta` on the `resp` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to drop the `userfac` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `usertec` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `iduser` to the `arquivos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `link` to the `arquivos` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "instituto_enum" AS ENUM ('tecnico', 'faculdade');

-- AlterEnum
ALTER TYPE "estado_arquivo_enum" ADD VALUE 'enviado';

-- DropForeignKey
ALTER TABLE "arquivos" DROP CONSTRAINT "fk_userfac";

-- DropForeignKey
ALTER TABLE "arquivos" DROP CONSTRAINT "fk_usertec";

-- AlterTable
ALTER TABLE "arquivos" DROP COLUMN "email",
DROP COLUMN "idfac",
DROP COLUMN "idtec",
DROP COLUMN "pass",
DROP COLUMN "resposta",
ADD COLUMN     "iduser" INTEGER NOT NULL,
ADD COLUMN     "link" VARCHAR(255) NOT NULL,
ALTER COLUMN "estado" SET DEFAULT 'enviado';

-- AlterTable
ALTER TABLE "resp" ALTER COLUMN "resposta" SET DATA TYPE VARCHAR(255);

-- DropTable
DROP TABLE "userfac";

-- DropTable
DROP TABLE "usertec";

-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "ra" VARCHAR(255) NOT NULL,
    "username" VARCHAR(250) NOT NULL,
    "email" VARCHAR(250) NOT NULL,
    "pass" VARCHAR(250) NOT NULL,
    "curso" VARCHAR(255) NOT NULL,
    "instituto" "instituto_enum" NOT NULL,
    "turno" "turno_enum" NOT NULL,
    "situacao" "situacao_enum" NOT NULL DEFAULT 'cursando',

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_ra_key" ON "user"("ra");

-- AddForeignKey
ALTER TABLE "arquivos" ADD CONSTRAINT "fk_user" FOREIGN KEY ("iduser") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

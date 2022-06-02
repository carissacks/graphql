/*
  Warnings:

  - Added the required column `genre` to the `Book` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Genre" AS ENUM ('FICTION', 'ROMANCE', 'BIOGRAPHY', 'SELF_IMPROVEMENT', 'EDUCATION');

-- AlterTable
ALTER TABLE "Book" ADD COLUMN     "genre" "Genre" NOT NULL;

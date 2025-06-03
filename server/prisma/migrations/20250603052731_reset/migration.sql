/*
  Warnings:

  - Added the required column `nickname` to the `Backup` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Backup" ADD COLUMN     "nickname" TEXT NOT NULL;

/*
  Warnings:

  - You are about to drop the column `summmary` on the `Prayer` table. All the data in the column will be lost.
  - Added the required column `summary` to the `Prayer` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Prayer" DROP COLUMN "summmary",
ADD COLUMN     "summary" TEXT NOT NULL;

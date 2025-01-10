/*
  Warnings:

  - A unique constraint covering the columns `[kindeID]` on the table `users` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "users" ADD COLUMN     "picture" TEXT,
ALTER COLUMN "lastName" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "users_kindeID_key" ON "users"("kindeID");

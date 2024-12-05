/*
  Warnings:

  - You are about to drop the `Prayer` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PrayerThread` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Prayer" DROP CONSTRAINT "Prayer_user_id_fkey";

-- DropForeignKey
ALTER TABLE "PrayerThread" DROP CONSTRAINT "PrayerThread_prayer_id_fkey";

-- DropTable
DROP TABLE "Prayer";

-- DropTable
DROP TABLE "PrayerThread";

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT,
    "avatar_uri" TEXT,
    "provider" TEXT NOT NULL,
    "provider_id" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "prayers" (
    "id" SERIAL NOT NULL,
    "content" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "prayers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "prayer_threads" (
    "id" SERIAL NOT NULL,
    "content" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "prayer_id" INTEGER NOT NULL,

    CONSTRAINT "prayer_threads_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_provider_provider_id_key" ON "users"("provider", "provider_id");

-- AddForeignKey
ALTER TABLE "prayers" ADD CONSTRAINT "prayers_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "prayer_threads" ADD CONSTRAINT "prayer_threads_prayer_id_fkey" FOREIGN KEY ("prayer_id") REFERENCES "prayers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

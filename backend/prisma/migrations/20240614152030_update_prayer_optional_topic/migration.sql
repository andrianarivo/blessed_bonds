-- DropForeignKey
ALTER TABLE "Prayer" DROP CONSTRAINT "Prayer_topicId_fkey";

-- AlterTable
ALTER TABLE "Prayer" ALTER COLUMN "topicId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Prayer" ADD CONSTRAINT "Prayer_topicId_fkey" FOREIGN KEY ("topicId") REFERENCES "Topic"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- DropForeignKey
ALTER TABLE "Note" DROP CONSTRAINT "Note_noteParentId_fkey";

-- DropForeignKey
ALTER TABLE "Prayer" DROP CONSTRAINT "Prayer_statusId_fkey";

-- AlterTable
ALTER TABLE "Prayer" ALTER COLUMN "statusId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Prayer" ADD CONSTRAINT "Prayer_statusId_fkey" FOREIGN KEY ("statusId") REFERENCES "Status"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Note" ADD CONSTRAINT "Note_noteParentId_fkey" FOREIGN KEY ("noteParentId") REFERENCES "Note"("id") ON DELETE CASCADE ON UPDATE CASCADE;

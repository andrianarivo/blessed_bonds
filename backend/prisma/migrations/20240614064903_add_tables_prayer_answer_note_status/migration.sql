-- CreateTable
CREATE TABLE "Prayer" (
    "id" SERIAL NOT NULL,
    "summmary" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "datetimeToPray" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "location" TEXT NOT NULL,
    "priority" INTEGER NOT NULL DEFAULT 0,
    "color" TEXT NOT NULL DEFAULT '#3300ff',
    "isPrivate" BOOLEAN NOT NULL DEFAULT true,
    "topicId" INTEGER NOT NULL,
    "statusId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Prayer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PrayersOnTags" (
    "prayerId" INTEGER NOT NULL,
    "tagId" INTEGER NOT NULL,
    "assignedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PrayersOnTags_pkey" PRIMARY KEY ("prayerId","tagId")
);

-- CreateTable
CREATE TABLE "Answer" (
    "id" SERIAL NOT NULL,
    "content" TEXT NOT NULL,
    "prayerId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Answer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Status" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Status_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Note" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "isPrivate" BOOLEAN NOT NULL,
    "prayerId" INTEGER NOT NULL,
    "noteParentId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Note_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Prayer" ADD CONSTRAINT "Prayer_topicId_fkey" FOREIGN KEY ("topicId") REFERENCES "Topic"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Prayer" ADD CONSTRAINT "Prayer_statusId_fkey" FOREIGN KEY ("statusId") REFERENCES "Status"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PrayersOnTags" ADD CONSTRAINT "PrayersOnTags_prayerId_fkey" FOREIGN KEY ("prayerId") REFERENCES "Prayer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PrayersOnTags" ADD CONSTRAINT "PrayersOnTags_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "Tag"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Answer" ADD CONSTRAINT "Answer_prayerId_fkey" FOREIGN KEY ("prayerId") REFERENCES "Prayer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Note" ADD CONSTRAINT "Note_prayerId_fkey" FOREIGN KEY ("prayerId") REFERENCES "Prayer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Note" ADD CONSTRAINT "Note_noteParentId_fkey" FOREIGN KEY ("noteParentId") REFERENCES "Note"("id") ON DELETE SET NULL ON UPDATE CASCADE;

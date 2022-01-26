-- AlterTable
ALTER TABLE "Screening" ADD COLUMN     "screenNumber" INTEGER;

-- CreateTable
CREATE TABLE "Screen" (
    "id" SERIAL NOT NULL,
    "number" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Screen_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Screen_number_key" ON "Screen"("number");

-- AddForeignKey
ALTER TABLE "Screening" ADD CONSTRAINT "Screening_screenNumber_fkey" FOREIGN KEY ("screenNumber") REFERENCES "Screen"("number") ON DELETE SET NULL ON UPDATE CASCADE;

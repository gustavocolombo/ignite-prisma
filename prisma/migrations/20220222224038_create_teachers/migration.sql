/*
  Warnings:

  - A unique constraint covering the columns `[fk_teacher_id]` on the table `courses` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `fk_teacher_id` to the `courses` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "courses" ADD COLUMN     "fk_teacher_id" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "teachers" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "teachers_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "courses_fk_teacher_id_key" ON "courses"("fk_teacher_id");

-- AddForeignKey
ALTER TABLE "courses" ADD CONSTRAINT "courses_fk_teacher_id_fkey" FOREIGN KEY ("fk_teacher_id") REFERENCES "teachers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

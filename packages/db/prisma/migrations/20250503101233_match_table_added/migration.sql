/*
  Warnings:

  - The primary key for the `Images` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `imageUrl2` on the `Images` table. All the data in the column will be lost.
  - You are about to drop the column `imageUrl3` on the `Images` table. All the data in the column will be lost.
  - You are about to drop the column `imageUrl4` on the `Images` table. All the data in the column will be lost.
  - You are about to drop the column `imageUrl5` on the `Images` table. All the data in the column will be lost.
  - You are about to drop the column `imageUrl6` on the `Images` table. All the data in the column will be lost.
  - You are about to drop the column `primaryImageUrl` on the `Images` table. All the data in the column will be lost.
  - The primary key for the `Prompts` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `age` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `gender` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `familyPlans` on the `UserDetails` table. All the data in the column will be lost.
  - You are about to drop the column `politicalBeliefs` on the `UserDetails` table. All the data in the column will be lost.
  - The required column `id` was added to the `Images` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `imageUrl` to the `Images` table without a default value. This is not possible if the table is not empty.
  - The required column `id` was added to the `Prompts` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Made the column `title` on table `Prompts` required. This step will fail if there are existing NULL values in that column.
  - Made the column `desc` on table `Prompts` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `datingGender` to the `UserDetails` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gender` to the `UserDetails` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Images" DROP CONSTRAINT "Images_pkey",
DROP COLUMN "imageUrl2",
DROP COLUMN "imageUrl3",
DROP COLUMN "imageUrl4",
DROP COLUMN "imageUrl5",
DROP COLUMN "imageUrl6",
DROP COLUMN "primaryImageUrl",
ADD COLUMN     "id" TEXT NOT NULL,
ADD COLUMN     "imageUrl" TEXT NOT NULL,
ADD CONSTRAINT "Images_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Prompts" DROP CONSTRAINT "Prompts_pkey",
ADD COLUMN     "id" TEXT NOT NULL,
ALTER COLUMN "title" SET NOT NULL,
ALTER COLUMN "desc" SET NOT NULL,
ADD CONSTRAINT "Prompts_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "User" DROP COLUMN "age",
DROP COLUMN "gender";

-- AlterTable
ALTER TABLE "UserDetails" DROP COLUMN "familyPlans",
DROP COLUMN "politicalBeliefs",
ADD COLUMN     "datingGender" "Gender" NOT NULL,
ADD COLUMN     "gender" "Gender" NOT NULL,
ADD COLUMN     "sexuality" TEXT;

-- CreateTable
CREATE TABLE "Match" (
    "id" TEXT NOT NULL,
    "userAId" TEXT NOT NULL,
    "userBId" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "chat" BOOLEAN NOT NULL DEFAULT false,
    "unMatchedBy" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Match_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ShowOnProfile" (
    "userDetailsUserId" TEXT NOT NULL,
    "gender" BOOLEAN DEFAULT true,
    "datingGender" BOOLEAN DEFAULT true,
    "sexuality" BOOLEAN DEFAULT true,
    "datingIntention" BOOLEAN DEFAULT false,
    "relationshipType" BOOLEAN DEFAULT false,
    "work" BOOLEAN DEFAULT false,
    "jobTitle" BOOLEAN DEFAULT false,
    "college" BOOLEAN DEFAULT false,
    "highestDegree" BOOLEAN DEFAULT false,
    "drink" BOOLEAN DEFAULT false,
    "tobacco" BOOLEAN DEFAULT false,
    "weed" BOOLEAN DEFAULT false,
    "drugs" BOOLEAN DEFAULT false,

    CONSTRAINT "ShowOnProfile_pkey" PRIMARY KEY ("userDetailsUserId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Match_userAId_userBId_key" ON "Match"("userAId", "userBId");

-- AddForeignKey
ALTER TABLE "Match" ADD CONSTRAINT "Match_userAId_fkey" FOREIGN KEY ("userAId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Match" ADD CONSTRAINT "Match_userBId_fkey" FOREIGN KEY ("userBId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShowOnProfile" ADD CONSTRAINT "ShowOnProfile_userDetailsUserId_fkey" FOREIGN KEY ("userDetailsUserId") REFERENCES "UserDetails"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

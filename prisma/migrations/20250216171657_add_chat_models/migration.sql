/*
  Warnings:

  - You are about to drop the column `expiryTime` on the `Donation` table. All the data in the column will be lost.
  - You are about to drop the column `recipientId` on the `Message` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `lastLoginAt` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Location` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Notification` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Pickup` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `address` to the `Donation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `expiryDate` to the `Donation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pickupTime` to the `Donation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `conversationId` to the `Message` table without a default value. This is not possible if the table is not empty.
  - Added the required column `receiverId` to the `Message` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Location" DROP CONSTRAINT "Location_donationId_fkey";

-- DropForeignKey
ALTER TABLE "Message" DROP CONSTRAINT "Message_recipientId_fkey";

-- DropForeignKey
ALTER TABLE "Notification" DROP CONSTRAINT "Notification_recipientId_fkey";

-- DropForeignKey
ALTER TABLE "Pickup" DROP CONSTRAINT "Pickup_donationId_fkey";

-- DropForeignKey
ALTER TABLE "Pickup" DROP CONSTRAINT "Pickup_volunteerId_fkey";

-- AlterTable
ALTER TABLE "Donation" DROP COLUMN "expiryTime",
ADD COLUMN     "address" TEXT NOT NULL,
ADD COLUMN     "claimerId" TEXT,
ADD COLUMN     "expiryDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "pickupTime" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "quantity" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Message" DROP COLUMN "recipientId",
ADD COLUMN     "conversationId" TEXT NOT NULL,
ADD COLUMN     "receiverId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "createdAt",
DROP COLUMN "lastLoginAt",
DROP COLUMN "updatedAt";

-- DropTable
DROP TABLE "Location";

-- DropTable
DROP TABLE "Notification";

-- DropTable
DROP TABLE "Pickup";

-- CreateTable
CREATE TABLE "Conversation" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "initiatorId" TEXT NOT NULL,
    "receiverId" TEXT NOT NULL,

    CONSTRAINT "Conversation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Conversation_initiatorId_idx" ON "Conversation"("initiatorId");

-- CreateIndex
CREATE INDEX "Conversation_receiverId_idx" ON "Conversation"("receiverId");

-- CreateIndex
CREATE UNIQUE INDEX "Conversation_initiatorId_receiverId_key" ON "Conversation"("initiatorId", "receiverId");

-- CreateIndex
CREATE INDEX "Donation_status_idx" ON "Donation"("status");

-- CreateIndex
CREATE INDEX "Donation_vendorId_idx" ON "Donation"("vendorId");

-- CreateIndex
CREATE INDEX "Donation_claimerId_idx" ON "Donation"("claimerId");

-- CreateIndex
CREATE INDEX "Message_conversationId_idx" ON "Message"("conversationId");

-- CreateIndex
CREATE INDEX "Message_senderId_idx" ON "Message"("senderId");

-- CreateIndex
CREATE INDEX "Message_receiverId_idx" ON "Message"("receiverId");

-- AddForeignKey
ALTER TABLE "Donation" ADD CONSTRAINT "Donation_claimerId_fkey" FOREIGN KEY ("claimerId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Conversation" ADD CONSTRAINT "Conversation_initiatorId_fkey" FOREIGN KEY ("initiatorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Conversation" ADD CONSTRAINT "Conversation_receiverId_fkey" FOREIGN KEY ("receiverId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_conversationId_fkey" FOREIGN KEY ("conversationId") REFERENCES "Conversation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_receiverId_fkey" FOREIGN KEY ("receiverId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

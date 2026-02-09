-- CreateEnum
CREATE TYPE "Status" AS ENUM ('ON_HOLD', 'IN_PROGRESS', 'DONE');

-- CreateTable
CREATE TABLE "Project" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "title" TEXT NOT NULL,
    "projectNumber" TEXT NOT NULL,
    "budgetAt" INTEGER NOT NULL,
    "budgetCap" INTEGER NOT NULL,
    "contactEmail" TEXT NOT NULL,
    "documentLink" TEXT NOT NULL,
    "currentStatus" TEXT NOT NULL,
    "nextSteps" TEXT NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'IN_PROGRESS',

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { Prisma, PrismaClient } from "../app/generated/prisma/client";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({
  adapter,
});

const projectData: Prisma.ProjectCreateInput[] = [
  {
    id: "cly01a1b2c3d",
    createdAt: "2025-02-01T10:15:00.000Z",
    updatedAt: "2025-02-05T14:30:00.000Z",
    title: "Infinity and Beyond",
    description:
      "Develop a next-generation exploration initiative focused on intergalactic safety and innovation.",
    projectNumber: "PX-001",
    budgetAt: 450000,
    budgetCap: 600000,
    contactEmail: "buzz@starcommand.com",
    documentLink: "https://docs.example.com/infinity-and-beyond",
    currentStatus: "Storyboarding complete, animation phase started",
    nextSteps: "Finalize character rigging and begin lighting tests",
    status: "IN_PROGRESS",
  },
  {
    id: "cly01e4f5g6h",
    createdAt: "2024-11-12T09:00:00.000Z",
    updatedAt: "2025-01-20T16:45:00.000Z",
    title: "Monsters at Work",
    description:
      "Improve the overall energy production workflow while eliminating all risks of human contact.",
    projectNumber: "PX-002",
    budgetAt: 300000,
    budgetCap: 500000,
    contactEmail: "hr@monstersinc.com",
    documentLink: "https://docs.example.com/monsters-at-work",
    currentStatus: "Voice recording completed, animation pending",
    nextSteps: "Schedule animation sprint and sound design",
    status: "ON_HOLD",
  },
  {
    id: "cly01i7j8k9l",
    createdAt: "2024-08-03T13:20:00.000Z",
    updatedAt: "2024-12-15T11:10:00.000Z",
    title: "Finding New Horizons",
    description:
      "Explore uncharted territories to reunite lost families and improve long-distance navigation.",
    projectNumber: "PX-003",
    budgetAt: 780000,
    budgetCap: 800000,
    contactEmail: "marlin@oceanic.org",
    documentLink: "https://docs.example.com/finding-new-horizons",
    currentStatus: "Final cut approved and distributed",
    nextSteps: "Post-release analytics and marketing wrap-up",
    status: "DONE",
  },
  {
    id: "cly01m2n3o4p",
    createdAt: "2025-01-10T08:40:00.000Z",
    updatedAt: "2025-02-02T17:05:00.000Z",
    title: "Inside the Mind",
    description:
      "Analyze emotional responses to improve decision-making and mental balance systems.",
    projectNumber: "PX-004",
    budgetAt: 520000,
    budgetCap: 700000,
    contactEmail: "joy@headquarters.io",
    documentLink: "https://docs.example.com/inside-the-mind",
    currentStatus: "Script revisions in progress",
    nextSteps: "Lock screenplay and begin voice casting",
    status: "IN_PROGRESS",
  },
  {
    id: "cly01q5r6s7t",
    createdAt: "2024-09-18T15:55:00.000Z",
    updatedAt: "2025-01-08T10:25:00.000Z",
    title: "Ratatouille Reimagined",
    description:
      "Redesign kitchen operations to prove that talent and creativity can come from anywhere.",
    projectNumber: "PX-005",
    budgetAt: 610000,
    budgetCap: 750000,
    contactEmail: "remy@pariskitchen.fr",
    documentLink: "https://docs.example.com/ratatouille-reimagined",
    currentStatus: "Set design and environment modeling underway",
    nextSteps: "Texture pass and lighting setup",
    status: "IN_PROGRESS",
  },
];

export async function main() {
  // Start timer
  const t0 = performance.now();
  console.log("DB Seed: Started ...");

  // Wipe existing data
  await prisma.project.deleteMany();

  for (const project of projectData) {
    await prisma.project.create({ data: project });
  }

  // Stop timer
  const t1 = performance.now();
  console.log(`DB Seed: Finished (${t1 - t0}ms)`);
}

main();

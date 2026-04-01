import "dotenv/config";

import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

import { PrismaClient } from "@/lib/generated/prisma/client";

if (!process.env.DIRECT_URL) {
  throw new Error("DIRECT_URL is missing from .env file");
}

const connectionString = process.env.DIRECT_URL;
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

export const posts = [
  {
    imageUrl: ["https://iso.500px.com/wp-content/uploads/2014/07/big-one.jpg"],
    name: "Masamo Mathewos",
    username: "mase",
    title: "First Post",
    content: "This is the content of the first post from the database.",
  },
  {
    imageUrl: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8YArUmDHWU7E4evslcZUv4OPis7GfLGAzUA&s",
    ],
    name: "Masamo Mathewos",
    username: "mase",
    title: "Second Post",
    content:
      "This is the content of the second post. This is the content of the second post. This is the content of the second post. This is the content of the second post. This is the content of the second post from the database.",
  },
  {
    imageUrl: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKmXGjtN4Y0BwOWkdtF4zEa5KRlJj3HuB_BA&s",
    ],
    name: "Masamo Mathewos",
    username: "mase",
    title: "Third Post",
    content: "This is the content of the third post from the database.",
  },
];

const seed = async () => {
  try {
    console.log("Seeding database...");
    await prisma.post.deleteMany();
    await prisma.post.createMany({
      data: posts,
    });
    console.log("Seed successful! 🌱");
  } catch (error) {
    console.error("Error seeding:", error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
    await pool.end(); // Closes the connection so the script can exit
  }
};

seed();

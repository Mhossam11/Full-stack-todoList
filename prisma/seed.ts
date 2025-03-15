import { PrismaClient } from "@prisma/client"; // Import PrismaClient to interact with the database
// import { faker } from "@faker-js/faker"; // Import Faker.js to generate random test data

// ✅ Use a global singleton to avoid multiple connections
const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };

// Check if a Prisma client instance already exists, if not, create a new one
const prisma = globalForPrisma.prisma || new PrismaClient();

// If the environment is not production, store the Prisma client in global scope
// This prevents multiple connections in development mode when Next.js or similar frameworks hot-reload the server
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

async function main() {
  // try {
  //   console.log("🌱 Seeding database..."); // Log message indicating the start of seeding

  //   // Fake data for todos
  //   await prisma.todo.createMany({
  //     data: Array.from({ length: 20 }, () => ({
  //       title: faker.lorem.words({ min: 2, max: 5 }), // Generate a random title with 2-5 words
  //       body: faker.lorem.paragraph(), // Generate a random paragraph as the body
  //       user_Id:""
  //     })),
  //   });

  //   console.log("✅ Seeding complete!"); // Log message indicating the completion of seeding
  // } catch (error) {
  //   console.error("❌ Error seeding database:", error); // Log error message if seeding fails
  //   process.exit(1); // Exit the process with a failure code (1)
  // } finally {
  //   await prisma.$disconnect(); // Ensure the Prisma client disconnects from the database after seeding
  // }
}

// Call the main function to execute the seeding process
main();

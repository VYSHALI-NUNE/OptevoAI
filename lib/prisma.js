import { PrismaClient } from "@prisma/client";  

export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  global.prisma = db;
};

//globalThis.prisma : this global variable ensures that the prisma client instance is reused
// across hot reloads during development. without this, each time your application
// reloads, a new instance of PrismaClient would be created, potentially leading to connection issues.


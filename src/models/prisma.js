//working as the linkage between database to client site
//building Prisma instance
//ทำหน้าที่เพื่อเชื่อมต่อกับ prisma

const { PrismaClient } = require("@prisma/client");

//can look up the query from console.log from terminal
//can query many types of model
const prisma = new PrismaClient({ log: ["query"] });

module.exports = prisma;

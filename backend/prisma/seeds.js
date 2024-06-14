const { faker } = require('@faker-js/faker');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

faker.seed(123);

console.log('creating seed data');

async function main() {
  await prisma.tag.create({
    data: {
      name: faker.lorem.word(),
    },
  });
  await prisma.status.create({
    data: {
      name: faker.lorem.word(),
    },
  });
  await prisma.topic.create({
    data: {
      name: faker.lorem.word(),
      description: faker.lorem.paragraph(),
    },
  });
}

void main()
  .then(() => void console.log('DB seeded with test data'))
  .catch((error) => {
    console.error(error);
    throw error;
  })
  .finally(() => void prisma.$disconnect());

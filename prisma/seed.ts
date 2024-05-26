import { PrismaClient } from '@prisma/client';
import { ulid } from 'ulid';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

const seed = async () => {
  const testUser1 = ulid();
  const testUser2 = ulid();
  await prisma.user.createMany({
    data: [
      {
        id: testUser1,
        email: 'testUser1@example.com',
        name: 'testUser1',
        encryptedPassword: await bcrypt.hash('testUser1', 10),
        emailconfirmedAt: new Date(),
      },
      {
        id: testUser2,
        email: 'testUser2@example.com',
        name: 'testUser2',
        encryptedPassword: await bcrypt.hash('testUser2', 10),
        emailconfirmedAt: new Date(),
      },
    ],
  });
};

seed()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

/* eslint-disable no-console */
import { db } from '../prisma';

import { seedAuthors } from './author';
import { seedBooks } from './book';
import { seedReviews } from './review';
import { seedUsers } from './user';

async function main() {
  console.log('Creating users');
  await seedUsers();
  console.log('Gathering authors');
  await seedAuthors();
  console.log('Collecting books');
  await seedBooks();
  console.log('Asking for reviews');
  await seedReviews();
  console.log('seeding complete');
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await db.prisma.$disconnect();
  });

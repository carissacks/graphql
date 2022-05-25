import { db } from '../prisma';

import { seedAuthors } from './author';
import { seedBooks } from './book';
import { seedReviews } from './review';
import { seedUsers } from './user';

async function main() {
  await seedUsers();
  await seedAuthors();
  await seedBooks();
  await seedReviews();
  // eslint-disable-next-line no-console
  console.log('seeding complete');
}

main()
  .catch((e) => {
    // eslint-disable-next-line no-console
    console.error(e);
  })
  .finally(async () => {
    await db.prisma.$disconnect();
  });

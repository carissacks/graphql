import { db } from '../prisma';

const authors = [
  { id: '1', name: 'Haemin Sunim' },
  { id: '2', name: 'Mark Manson' },
  { id: '3', name: 'James Clear' },
];

export async function seedAuthors() {
  await db.prisma.author.createMany({ data: authors });
}

import { db } from '../prisma';

const users = [
  { id: '1', email: 'carissa@gmail.com', password: '123', name: 'Carissa' },
  { id: '2', email: 'elaine@gmail.com', password: '123', name: 'Elaine' },
  { id: '3', email: 'adrian@gmail.com', password: '123', name: 'Adrian' },
];

export async function seedUsers() {
  await db.prisma.user.createMany({ data: users });
}

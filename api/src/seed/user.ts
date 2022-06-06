import { hash } from 'bcrypt';

import { SALT } from '../constants/api';
import { db } from '../prisma';

const users = [
  { id: '1', email: 'carissa@gmail.com', password: '123', name: 'Carissa' },
  { id: '2', email: 'elaine@gmail.com', password: '123', name: 'Elaine' },
  { id: '3', email: 'adrian@gmail.com', password: '123', name: 'Adrian' },
];

export async function seedUsers() {
  for (let user of users) {
    await db.prisma.user.create({
      data: {
        ...user,
        password: await hash(user.password, SALT),
      },
    });
  }
}

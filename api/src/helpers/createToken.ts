import { db } from '../prisma';

import { generateRandomString } from './randomString';

export async function createToken(id: string) {
  const token = generateRandomString(16);

  let currentDate = new Date();
  let expiresAt = new Date(
    currentDate.setMinutes(currentDate.getMinutes() + 15),
  );

  // NOTE: invalidate previous OTP if exists and still active
  await db.prisma.token.updateMany({
    data: { active: false },
    where: { active: true, userId: id },
  });

  // NOTE: create new OTP
  await db.prisma.token.create({
    data: {
      token,
      expiresAt,
      user: { connect: { id } },
    },
  });
  return token;
}

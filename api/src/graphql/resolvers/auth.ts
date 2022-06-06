import bcrypt from 'bcrypt';

import { builder } from '../../builder';
import { SALT } from '../../constants/api';
import { createToken } from '../../helpers';
import { db } from '../../prisma';

builder.mutationFields((t) => ({
  login: t.field({
    type: 'Auth',
    description:
      'Please provide email and password. The token will be active for 15 minutes',
    args: {
      email: t.arg.string({ required: true }),
      password: t.arg.string({ required: true }),
    },
    resolve: async (_root, args, _ctx, _info) => {
      const { email, password: passwordInput } = args;
      const user = await db.prisma.user.findFirst({
        select: { id: true, name: true, password: true },
        where: { email: { equals: email, mode: 'insensitive' } },
      });

      if (!user) {
        throw new Error('User is not found');
      }
      const { id, name, password } = user;

      const isPasswordValid = await bcrypt.compare(passwordInput, password);
      if (!isPasswordValid) {
        throw new Error('User is not found');
      }

      const token = await createToken(user.id);
      return { id, name, token };
    },
  }),
  register: t.field({
    type: 'Auth',
    description: `Please provide the user's information. The token will be active for 15 minutes`,
    args: {
      email: t.arg.string({ required: true }),
      name: t.arg.string({ required: true }),
      password: t.arg.string({ required: true }),
    },
    resolve: async (_root, args, _ctx, _info) => {
      const { email, password: rawPassword, name } = args;
      const password = await bcrypt.hash(rawPassword, SALT);

      const user = await db.prisma.user.create({
        data: { email, password, name },
      });
      const token = await createToken(user.id);
      return { id: user.id, name: user.name, token };
    },
  }),
}));

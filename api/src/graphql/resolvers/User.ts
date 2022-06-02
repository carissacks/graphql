import { builder } from '../../builder';
import { db } from '../../prisma';

builder.queryFields((t) => ({
  users: t.prismaField({
    description: 'Query all users',
    type: ['User'],
    resolve: async (query, _root, _args, _ctx, _info) =>
      db.prisma.user.findMany({ ...query }),
  }),
  user: t.prismaField({
    description: 'Query specific user based on ID',
    type: 'User',
    args: { id: t.arg.string({ required: true }) },
    resolve: async (query, _root, args, _ctx, _info) =>
      db.prisma.user.findUnique({
        ...query,
        rejectOnNotFound: true,
        where: { id: args.id },
      }),
  }),
}));

builder.mutationField('signUp', (t) =>
  t.prismaField({
    type: 'User',
    args: {
      name: t.arg.string({ required: true }),
      email: t.arg.string({ required: true }),
      password: t.arg.string({ required: true }),
    },
    resolve: (query, _root, args, _ctx, _info) =>
      db.prisma.user.create({ ...query, data: args }),
  }),
);

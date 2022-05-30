import { builder } from '../../builder';
import { db } from '../../prisma';

builder.queryFields((t) => ({
  users: t.prismaField({
    description: 'Query all users',
    type: ['User'],
    resolve: async (query, _root, _args, _ctx, _info) =>
      db.prisma.user.findMany({ ...query }),
  }),
}));

import { builder } from '../../builder';
import { db } from '../../prisma';

builder.queryFields((t) => ({
  books: t.prismaField({
    description: 'Query all books',
    type: ['Book'],
    resolve: async (query, _root, _args, _ctx, _info) =>
      db.prisma.book.findMany({ ...query }),
  }),
}));

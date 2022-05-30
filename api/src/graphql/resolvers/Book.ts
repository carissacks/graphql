import { builder } from '../../builder';
import { db } from '../../prisma';

builder.queryFields((t) => ({
  books: t.prismaField({
    description: 'Query all books',
    type: ['Book'],
    resolve: async (query, _root, _args, _ctx, _info) =>
      db.prisma.book.findMany({ ...query }),
  }),
  book: t.prismaField({
    description: 'Query book based on ID',
    type: 'Book',
    args: {
      id: t.arg({
        type: 'String',
        description: 'Book ID',
        required: true,
      }),
    },
    resolve: async (query, _root, args, _ctx, _info) =>
      db.prisma.book.findUnique({
        ...query,
        rejectOnNotFound: true,
        where: { id: args.id },
      }),
  }),
}));

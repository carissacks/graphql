import { builder } from '../../builder';
import { db } from '../../prisma';

// Only add one query using builder.queryField
builder.queryField('authors', (t) =>
  t.prismaField({
    description: 'Query all authors',
    type: ['Author'],
    resolve: async (query, _root, _args, _ctx, _info) =>
      db.prisma.author.findMany({ ...query }),
  }),
);

builder.mutationFields((t) => ({
  createAuthor: t.prismaField({
    description: 'Create new author with no book',
    type: 'Author',
    args: { name: t.arg.string({ required: true }) },
    resolve: async (query, _root, args, _ctx, _info) =>
      db.prisma.author.create({ ...query, data: args }),
  }),
}));

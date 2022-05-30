import { builder } from '../../builder';
import { db } from '../../prisma';

builder.queryField('reviews', (t) =>
  t.prismaField({
    description: 'Query all reviews',
    type: ['Review'],
    resolve: async (query, _root, _args, _ctx, _info) =>
      db.prisma.review.findMany({ ...query }),
  }),
);

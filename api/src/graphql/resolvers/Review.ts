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

builder.mutationFields((t) => ({
  addReview: t.prismaField({
    type: 'Review',
    args: {
      content: t.arg.string({ required: true }),
      bookId: t.arg.string({ required: true }),
      // TODO: remove user id and use auth context instead.
      userId: t.arg.string({ required: true }),
    },
    resolve: async (query, _root, args, _ctx, _info) => {
      const { bookId, userId, content } = args;
      return db.prisma.review.create({
        ...query,
        data: {
          content,
          book: { connect: { id: bookId } },
          user: { connect: { id: userId } },
        },
      });
    },
  }),
}));

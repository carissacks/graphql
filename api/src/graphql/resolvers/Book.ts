import { builder } from '../../builder';
import { db } from '../../prisma';
import { Genre } from '../objectTypes/GenreTypes';

// Able to add more than one query using builder.queryFields
builder.queryFields((t) => ({
  books: t.prismaField({
    description: 'Query all books',
    args: {
      genre: t.arg({ type: Genre }),
      author: t.arg.string(),
      title: t.arg.string(),
    },
    type: ['Book'],
    resolve: async (query, _root, args, _ctx, _info) =>
      db.prisma.book.findMany({
        ...query,
        where: {
          ...(args.title && {
            title: { contains: args.title, mode: 'insensitive' },
          }),
          ...(args.author && {
            author: { name: { equals: args.author, mode: 'insensitive' } },
          }),
          ...(args.genre && { genre: args.genre }),
        },
      }),
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

builder.mutationFields((t) => ({
  createBook: t.prismaField({
    description: 'Create new book',
    type: 'Book',
    args: {
      title: t.arg.string({ required: true }),
      poster: t.arg.string(),
      genre: t.arg({ type: Genre, required: true }),
      authorId: t.arg.string({ required: true }),
    },
    resolve: async (query, _root, args, _ctx, _info) => {
      const { authorId, ...otherArgs } = args;
      return db.prisma.book.create({
        ...query,
        data: { ...otherArgs, author: { connect: { id: authorId } } },
      });
    },
  }),
}));

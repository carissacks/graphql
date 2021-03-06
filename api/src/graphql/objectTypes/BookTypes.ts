import { builder } from '../../builder';

builder.prismaObject('Book', {
  findUnique: ({ id }) => ({ id }),
  fields: (t) => ({
    id: t.exposeID('id'),
    title: t.exposeString('title'),
    genre: t.exposeString('genre'),
    poster: t.expose('poster', { type: 'String', nullable: true }),
    author: t.relation('author'),
    reviews: t.relation('reviews'),
  }),
});

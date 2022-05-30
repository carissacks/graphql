import { builder } from '../../builder';

builder.prismaObject('Author', {
  description: 'The one who writes this book',
  findUnique: ({ id }) => ({ id }),
  fields: (t) => ({
    id: t.exposeID('id'),
    name: t.exposeString('name'),
    books: t.relation('books', {
      query: () => ({ orderBy: { title: 'asc' } }),
    }),
  }),
});

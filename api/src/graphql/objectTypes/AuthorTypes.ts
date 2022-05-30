import { builder } from '../../builder';

builder.prismaObject('Author', {
  description: 'The one who writes this book',
  findUnique: ({ id }) => ({ id }),
  // find unique is needed to query the data in case it needs more than 1 simple query.
  fields: (t) => ({
    id: t.exposeID('id'),
    // expose fields from database with specified field name
    name: t.exposeString('name'),
    books: t.relation('books', {
      query: () => ({ orderBy: { title: 'asc' } }),
    }),
  }),
});

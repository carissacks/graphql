import { builder } from '../../builder';

builder.prismaObject('Review', {
  findUnique: ({ id }) => ({ id }),
  fields: (t) => ({
    id: t.exposeID('id'),
    content: t.exposeString('content'),
    user: t.relation('user'),
    book: t.relation('book'),
  }),
});

import { builder } from '../../builder';

builder.prismaObject('User', {
  findUnique: ({ id }) => ({ id }),
  fields: (t) => ({
    id: t.exposeID('id'),
    name: t.exposeString('name'),
    email: t.exposeString('email'),
    reviews: t.relation('reviews'),
  }),
});

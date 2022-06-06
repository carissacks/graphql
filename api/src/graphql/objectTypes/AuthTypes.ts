import { builder } from '../../builder';

builder.objectType('Auth', {
  fields: (t) => ({
    token: t.exposeString('token'),
    id: t.exposeString('id'),
    name: t.exposeString('name'),
  }),
});

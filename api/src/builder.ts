import SchemaBuilder from '@pothos/core';
import PrismaPlugin from '@pothos/plugin-prisma';
import ScopeAuthPlugin from '@pothos/plugin-scope-auth';
import { Role, User } from '@prisma/client';

import PrismaTypes from './generated/pothos-types';
import { db } from './prisma';

type Context = {
  userId: string;
};

type Objects = {
  Auth: Pick<User, 'id' | 'name'> & {
    token: string;
  };
};

export const builder = new SchemaBuilder<{
  Context: Context;
  Objects: Objects;
  AuthScopes: {
    public: boolean;
    admin: boolean;
  };
  PrismaTypes: PrismaTypes;
}>({
  plugins: [ScopeAuthPlugin, PrismaPlugin],
  authScopes: (context) => ({
    public: !!context.userId,
    admin: async () => {
      if (!context.userId) {
        throw new Error('Unauthorized access');
      }
      const user = await db.prisma.user.findFirst({
        select: { id: true },
        where: { id: context.userId, role: Role.ADMIN },
      });
      return !!user;
    },
  }),
  prisma: { client: db.prisma },
});

builder.queryType({ description: 'Queries' });
builder.mutationType({ description: 'Mutations' });

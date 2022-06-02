import SchemaBuilder from '@pothos/core';
import PrismaPlugin from '@pothos/plugin-prisma';

import PrismaTypes from './generated/pothos-types';
import { db } from './prisma';

export const builder = new SchemaBuilder<{ PrismaTypes: PrismaTypes }>({
  plugins: [PrismaPlugin],
  prisma: { client: db.prisma },
});

builder.queryType({ description: 'Queries' });
builder.mutationType({ description: 'Mutations' });

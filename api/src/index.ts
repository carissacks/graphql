import { createServer } from '@graphql-yoga/node';
import { initContextCache } from '@pothos/core';

import { db } from './prisma';
import { schema } from './schema';

const server = createServer({
  schema,
  context: async ({ req }) => {
    const bearerToken = req.headers.authorization?.split(' ') ?? '';
    const token = bearerToken[1];
    const user = await db.prisma.token.findFirst({
      select: { userId: true },
      where: { token },
    });
    return { ...initContextCache(), userId: user?.userId };
  },
});

// http://localhost:4000/graphql
server.start().catch((error) => {
  // eslint-disable-next-line no-console
  console.error(error);
});

import { createServer } from '@graphql-yoga/node';

import { schema } from './schema';

const server = createServer({ schema });

// http://localhost:4000/graphql
server.start().catch((error) => {
  // eslint-disable-next-line no-console
  console.error(error);
});

/* eslint-disable no-console */
import { PrismaClient } from '@prisma/client';

type Database = {
  prismaInstance: PrismaClient | null;
  prisma: PrismaClient;
};

export const db: Database = {
  prismaInstance: null,

  get prisma() {
    if (this.prismaInstance) {
      return this.prismaInstance;
    } else {
      const prisma = new PrismaClient({
        log: [
          { level: 'query', emit: 'event' },
          { level: 'error', emit: 'event' },
          { level: 'info', emit: 'stdout' },
          { level: 'warn', emit: 'stdout' },
        ],
      });
      prisma.$on('query', (event) => {
        console.log('QUERY: ', event.query);
        console.log('Timestamp: ', event.timestamp);
        console.log('Duration: ', event.duration);
        console.log('Target: ', event.target);
      });

      prisma.$on('error', (event) => {
        console.log('ERROR: ', event.message);
        console.log('Timestamp: ', event.timestamp);
        console.log('Target: ', event.target);
      });

      this.prismaInstance = prisma;
      return this.prismaInstance;
    }
  },
};

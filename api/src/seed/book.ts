import { Genre } from '@prisma/client';

import { db } from '../prisma';

const books = [
  {
    id: '1',
    title: 'Love for Imperfect Things',
    authorId: '1',
    genre: Genre.SELF_IMPROVEMENT,
    poster:
      'https://1.bp.blogspot.com/-tIoFm6104fE/YBf7c2RK3uI/AAAAAAAAKTA/wklnGVpRIMwrbnJgYmw7kspGv2eIS7tRgCLcBGAsYHQ/s500/51eoQyOP-9L.jpg',
  },
  {
    id: '2',
    title: 'Things You See Only when You Slow Down',
    authorId: '1',
    genre: Genre.SELF_IMPROVEMENT,
  },
  {
    id: '3',
    title: 'Subtle Art of Not Giving a F***',
    authorId: '2',
    poster: 'https://images-na.ssl-images-amazon.com/images/I/71QKQ9mwV7L.jpg',
    genre: Genre.SELF_IMPROVEMENT,
  },
  {
    id: '4',
    title: 'Atomic Habits',
    authorId: '3',
    poster:
      'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1647263154l/33154385.jpg',
    genre: Genre.SELF_IMPROVEMENT,
  },
  {
    id: '5',
    title: 'Everything is F***ed',
    authorId: '2',
    genre: Genre.SELF_IMPROVEMENT,
  },
];

export async function seedBooks() {
  await db.prisma.book.createMany({ data: books });
}

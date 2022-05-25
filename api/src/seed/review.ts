import { db } from '../prisma';

const reviews = [
  {
    id: '1',
    bookId: '1',
    userId: '1',
    content: 'This is the most inspiring book I have ever read! 5 out of 5.',
  },
  {
    id: '2',
    bookId: '4',
    userId: '2',
    content: 'I feel highly motivated and productive. This is AWESOME!',
  },
  {
    id: '3',
    bookId: '5',
    userId: '3',
    content: 'Great, but still prefer the first one.',
  },
];

export async function seedReviews() {
  await db.prisma.review.createMany({ data: reviews });
}

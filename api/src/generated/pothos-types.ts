import type {
  Prisma,
  Author,
  Book,
  User,
  Review,
} from '/Users/Carissa/Documents/graphql/api/node_modules/@prisma/client';
export default interface PrismaTypes {
  Author: {
    Name: 'Author';
    Shape: Author;
    Include: Prisma.AuthorInclude;
    Select: Prisma.AuthorSelect;
    Where: Prisma.AuthorWhereUniqueInput;
    Fields: 'Book';
    RelationName: 'Book';
    ListRelations: 'Book';
    Relations: {
      Book: {
        Shape: Array<Book>;
        Types: PrismaTypes['Book'];
      };
    };
  };
  Book: {
    Name: 'Book';
    Shape: Book;
    Include: Prisma.BookInclude;
    Select: Prisma.BookSelect;
    Where: Prisma.BookWhereUniqueInput;
    Fields: 'author' | 'Review';
    RelationName: 'author' | 'Review';
    ListRelations: 'Review';
    Relations: {
      author: {
        Shape: Author;
        Types: PrismaTypes['Author'];
      };
      Review: {
        Shape: Array<Review>;
        Types: PrismaTypes['Review'];
      };
    };
  };
  User: {
    Name: 'User';
    Shape: User;
    Include: Prisma.UserInclude;
    Select: Prisma.UserSelect;
    Where: Prisma.UserWhereUniqueInput;
    Fields: 'Review';
    RelationName: 'Review';
    ListRelations: 'Review';
    Relations: {
      Review: {
        Shape: Array<Review>;
        Types: PrismaTypes['Review'];
      };
    };
  };
  Review: {
    Name: 'Review';
    Shape: Review;
    Include: Prisma.ReviewInclude;
    Select: Prisma.ReviewSelect;
    Where: Prisma.ReviewWhereUniqueInput;
    Fields: 'book' | 'user';
    RelationName: 'book' | 'user';
    ListRelations: never;
    Relations: {
      book: {
        Shape: Book;
        Types: PrismaTypes['Book'];
      };
      user: {
        Shape: User;
        Types: PrismaTypes['User'];
      };
    };
  };
}

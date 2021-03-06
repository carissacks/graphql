import type {
  Prisma,
  Token,
  Author,
  Book,
  User,
  Review,
} from '/Users/Carissa/Documents/graphql/api/node_modules/@prisma/client';
export default interface PrismaTypes {
  Token: {
    Name: 'Token';
    Shape: Token;
    Include: Prisma.TokenInclude;
    Select: Prisma.TokenSelect;
    Where: Prisma.TokenWhereUniqueInput;
    Fields: 'user';
    RelationName: 'user';
    ListRelations: never;
    Relations: {
      user: {
        Shape: User;
        Types: PrismaTypes['User'];
      };
    };
  };
  Author: {
    Name: 'Author';
    Shape: Author;
    Include: Prisma.AuthorInclude;
    Select: Prisma.AuthorSelect;
    Where: Prisma.AuthorWhereUniqueInput;
    Fields: 'books';
    RelationName: 'books';
    ListRelations: 'books';
    Relations: {
      books: {
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
    Fields: 'author' | 'reviews';
    RelationName: 'author' | 'reviews';
    ListRelations: 'reviews';
    Relations: {
      author: {
        Shape: Author;
        Types: PrismaTypes['Author'];
      };
      reviews: {
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
    Fields: 'reviews' | 'token';
    RelationName: 'reviews' | 'token';
    ListRelations: 'reviews' | 'token';
    Relations: {
      reviews: {
        Shape: Array<Review>;
        Types: PrismaTypes['Review'];
      };
      token: {
        Shape: Array<Token>;
        Types: PrismaTypes['Token'];
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

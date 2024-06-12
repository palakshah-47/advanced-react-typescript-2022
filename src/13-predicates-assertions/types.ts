export type SmallBook = {
  type: 'small-book';
  title: string;
  description: string;
};

export type Book = {
  type: 'book';
  title: string;
  description: string;
};

export type Magazine = {
  type: 'magazine';
  title: string;
};

export type Pen = {
  type: 'pen';
  color: string;
};

export function isBook(book: ItemsOnSale): book is Book {
  return book.type === 'book';
}

export function assertBook(item: ItemsOnSale): asserts item is Book {
  console.log('isBook: ', isBook(item));
  if (!isBook(item)) {
    throw new Error('Not a book');
  }
}

export function isMagazine(book: ItemsOnSale): book is Magazine {
  return book.type === 'magazine';
}

export function assertMagazine(item: ItemsOnSale): asserts item is Magazine {
  if (!isMagazine(item)) {
    throw new Error('Not a magazine');
  }
}
export function isPen(book: ItemsOnSale): book is Pen {
  return book.type === 'pen';
}

export function assertPen(item: ItemsOnSale): asserts item is Pen {
  if (!isPen(item)) {
    throw new Error('Not a magazine');
  }
}

export type ItemsOnSale = Book | Magazine | Pen | SmallBook;

export function assertNever(x: never): never {
  throw new Error(`Unexpected value: ` + JSON.stringify(x, null, 2));
}

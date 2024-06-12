import type { FC } from 'react';
import { BookOnSale } from './book-on-sale';
import { MagazineOnSale } from './magazine-on-sale';
import { PenOnSale } from './pen-on-sale';
import {
  Book,
  ItemsOnSale,
  Magazine,
  Pen,
  isBook,
  isPen,
  isMagazine,
  assertBook,
  assertMagazine,
  assertPen,
  assertNever,
} from './types';

type Props = {
  item: ItemsOnSale;
};

export const ItemOnSale: FC<Props> = ({ item }) => {
  switch (item.type) {
    // case 'book':
    //   if (isBook(item)) {
    //     return <BookOnSale book={item} />;
    //   }
    // case 'magazine':
    //   if (isMagazine(item)) {
    //     return <MagazineOnSale magazine={item} />;
    //   }
    // case 'pen':
    //   if (isPen(item)) {
    //     return <PenOnSale pen={item} />;
    //   }
    case 'book':
      // assertBook(item);
      return <BookOnSale book={item} />;
    case 'magazine':
      // assertMagazine(item);
      return <MagazineOnSale magazine={item} />;
    case 'pen':
      // assertPen(item);
      return <PenOnSale pen={item} />;
    default:
      assertNever(item);
  }

  return null;
};

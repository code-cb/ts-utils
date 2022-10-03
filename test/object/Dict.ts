import { id } from 'common';
import * as O from 'object';

describe(`O.Dict`, () => {
  it(`works`, () => {
    id<O.Dict<number>>({ a: 1, b: 2 });
    id<O.Dict<number>>({
      a: 1,
      // @ts-expect-error
      b: '2',
    });
    id<O.Dict>({ a: '1', b: '2' });
    id<O.Dict<boolean, symbol>>({
      [Symbol('a')]: true,
      [Symbol('b')]: false,
      // @ts-expect-error
      a: false,
    });
  });
});

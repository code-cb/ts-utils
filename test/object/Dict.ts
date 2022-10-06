import { assert, Equals, id } from 'common';
import * as O from 'object';

describe(`O.Dict`, () => {
  it(`works`, () => {
    assert<Equals<O.Dict<number>, { [K: string]: number }>>();
    id<O.Dict<number>>({ a: 1, b: 2 });
    id<O.Dict<number>>({
      a: 1,
      // @ts-expect-error
      b: '2',
    });

    assert<Equals<O.Dict, { [K: string]: string }>>();
    id<O.Dict>({ a: '1', b: '2' });

    assert<Equals<O.Dict<boolean, symbol>, { [K: symbol]: boolean }>>();
    id<O.Dict<boolean, symbol>>({
      [Symbol('a')]: true,
      [Symbol('b')]: false,
      // @ts-expect-error
      a: false,
    });
  });
});

describe(`O.AnyDict`, () => {
  it(`works`, () => {
    assert<Equals<O.AnyDict, { [K: string]: any }>>();
    id<O.AnyDict>({ a: 1, b: '2', c: true, d: () => {}, e: /abc/ });
  });
});

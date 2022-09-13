import * as O from 'object';

export const d1: O.Dict<number> = { a: 1, b: 2 };

// @ts-expect-error
export const d2: O.Dict<number> = { a: '1' };

export const d3: O.Dict = { a: '1', b: '2' };

export const d4: O.Dict<boolean, symbol> = {
  [Symbol('a')]: true,
  [Symbol('b')]: false,
  // @ts-expect-error
  // a: false,
  2: true,
};

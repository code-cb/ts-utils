import { assert, Assignable, B as E2 } from '../../src/index.js';

export const f1 = (s: string | Buffer) => {
  assert(typeof s === 'string');
  return s.toLowerCase();
};

export const f2 = (s: string | Buffer) => {
  assert(typeof s !== 'string');
  return s.byteLength;
};

type E1 = 'a' | 'b';
type E2 = 'a' | 'b' | 'c';
assert<Assignable<E1, E2>>();
assert<E2.Not<Assignable<E2, E1>>>();

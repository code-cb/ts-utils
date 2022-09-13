import * as B from 'boolean';
import { assert, Assignable } from 'common';

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
assert<B.Not<Assignable<E2, E1>>>();

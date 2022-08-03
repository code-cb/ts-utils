import { assert, Assignable, Not } from '../index.js';

export const f1 = (s: string | Buffer) => {
  assert(typeof s === 'string');
  return s.toLowerCase();
};

export const f2 = (s: string | Buffer) => {
  assert(typeof s !== 'string');
  return s.byteLength;
};

type A = 'a' | 'b';
type B = 'a' | 'b' | 'c';
assert<Assignable<A, B>>();
assert<Not<Assignable<B, A>>>();

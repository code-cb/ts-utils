import { assert, Assignable, Not } from '../index.js';

assert<Assignable<'a', 'a' | 'b'>>();
assert<Not<Assignable<'a' | 'b', 'a'>>>();
assert<Assignable<{ a: 4; b: 5 }, { b: 5 }>>();
assert<Not<Assignable<{ b: 5 }, { a: 4; b: 5 }>>>();

type Extends2<A, B> = [A] extends [B] ? true : false;

assert<Extends2<'a', 'a' | 'b'>>();
assert<Not<Extends2<'a' | 'b', 'a'>>>();
assert<Extends2<{ a: 4; b: 5 }, { b: 5 }>>();
assert<Not<Extends2<{ b: 5 }, { a: 4; b: 5 }>>>();

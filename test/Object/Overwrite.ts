import { assert, Assignable, O } from '../../src/index.js';

interface Obj1 {
  a: number;
  b?: string;
  c: boolean;
}

interface Obj2 {
  c: number;
  d?: string;
  e: boolean;
}

type Overwritten = O.Overwrite<Obj1, Obj2>;

interface Expected {
  a: number;
  b?: string | undefined;
  c: number;
  d?: string | undefined;
  e: boolean;
}

assert<Assignable<Overwritten, Expected>>();
assert<Assignable<Expected, Overwritten>>();

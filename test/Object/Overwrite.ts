import * as O from '../../src/object/index.js';
import { assert, Equals } from '../../src/common/index.js';

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
  b?: string;
  c: number;
  d?: string;
  e: boolean;
}

assert<Equals<Overwritten, Expected>>();
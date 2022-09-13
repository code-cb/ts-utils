import { assert, Equals } from 'common';
import * as O from 'object';

interface MyInterface {
  a: number;
  b?: boolean;
  c: number;
  d: string;
}

assert<Equals<O.KeyByValue<MyInterface, number>, 'a' | 'c'>>();
assert<Equals<O.KeyByValue<MyInterface, boolean>, never>>();
assert<Equals<O.KeyByValue<MyInterface, boolean | undefined>, 'b'>>();
assert<Equals<O.KeyByValue<MyInterface, Function>, never>>();

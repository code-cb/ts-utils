import { assert, Equals } from '../../src/common/index.js';
import * as O from '../../src/object/index.js';

interface MyInterface {
  a: number;
  b?: boolean;
  c: number;
  d: string;
}

assert<Equals<O.PickByValue<MyInterface, number>, { a: number; c: number }>>();
assert<Equals<O.PickByValue<MyInterface, boolean>, {}>>();
assert<
  Equals<O.PickByValue<MyInterface, boolean | undefined>, { b?: boolean }>
>();
assert<Equals<O.PickByValue<MyInterface, Function>, {}>>();

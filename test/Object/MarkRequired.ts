import { assert, Equals } from '../../src/common';
import * as O from '../../src/object';

interface MyInterface {
  a: number;
  readonly b: string;
  c?: boolean;
}

assert<
  Equals<
    O.MarkRequired<MyInterface, 'c'>,
    { a: number; readonly b: string; c: boolean }
  >
>();

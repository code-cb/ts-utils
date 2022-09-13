import { assert, Equals } from '../../src/common';
import * as O from '../../src/object';

interface MyInterface {
  a: number;
  readonly b: string;
  c?: boolean;
}

assert<
  Equals<
    O.MarkWritable<MyInterface, 'b'>,
    { a: number; b: string; c?: boolean }
  >
>();

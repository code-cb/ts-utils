import { assert, Equals } from '../../sources/common';
import * as O from '../../sources/object';

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

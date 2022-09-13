import { assert, Equals } from 'common';
import * as O from 'object';

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

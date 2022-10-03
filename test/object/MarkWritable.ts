import { assert, Equals } from 'common';
import * as O from 'object';

describe(`O.MarkWritable`, () => {
  it(`works`, () => {
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
  });
});

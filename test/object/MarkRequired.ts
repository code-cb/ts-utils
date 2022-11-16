import { assert, Equals } from 'common';
import * as O from 'object';

describe(`O.MarkRequired`, () => {
  it(`works`, () => {
    interface MyInterface {
      a: number;
      readonly b: string;
      c?: boolean | undefined;
    }

    assert<
      Equals<
        O.MarkRequired<MyInterface, 'c'>,
        { a: number; readonly b: string; c: boolean }
      >
    >();
    assert<
      Equals<
        O.MarkRequired<MyInterface, 'c', true>,
        { a: number; readonly b: string; c: boolean }
      >
    >();
    assert<
      Equals<
        O.MarkRequired<MyInterface, 'c', false>,
        { a: number; readonly b: string; c: boolean | undefined }
      >
    >();
  });
});

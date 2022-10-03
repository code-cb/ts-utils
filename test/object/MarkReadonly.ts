import { assert, Equals } from 'common';
import * as O from 'object';

describe(`O.MarkReadonly`, () => {
  it(`works`, () => {
    interface MyInterface {
      a: number;
      readonly b: string;
      c?: boolean;
    }

    assert<
      Equals<
        O.MarkReadonly<MyInterface, 'a'>,
        { readonly a: number; readonly b: string; c?: boolean }
      >
    >();
  });
});

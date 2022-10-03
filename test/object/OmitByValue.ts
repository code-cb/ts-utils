import { assert, Equals } from 'common';
import * as O from 'object';

describe(`O.OmitByValue`, () => {
  it(`works`, () => {
    interface MyInterface {
      a: number;
      b?: boolean;
      c: number;
      d: string;
    }

    assert<
      Equals<O.OmitByValue<MyInterface, number>, { b?: boolean; d: string }>
    >();
    assert<
      Equals<
        O.OmitByValue<MyInterface, boolean>,
        { a: number; b?: boolean; c: number; d: string }
      >
    >();
    assert<
      Equals<
        O.OmitByValue<MyInterface, boolean | undefined>,
        { a: number; c: number; d: string }
      >
    >();
    assert<
      Equals<
        O.OmitByValue<MyInterface, Function>,
        { a: number; b?: boolean; c: number; d: string }
      >
    >();
  });
});

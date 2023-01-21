import { assert, Builtin, Equals } from 'common';

describe(`Builtin`, () => {
  it(`works`, () => {
    assert<
      Equals<
        Builtin,
        | bigint
        | boolean
        | Date
        | Error
        | Function
        | null
        | number
        | RegExp
        | string
        | symbol
        | undefined
      >
    >();
  });
});

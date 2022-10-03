import { assert, Equals, Primitive } from 'common';

describe(`Primitive`, () => {
  it(`works`, () => {
    assert<
      Equals<
        Primitive,
        string | number | boolean | null | undefined | symbol | bigint
      >
    >();
  });
});

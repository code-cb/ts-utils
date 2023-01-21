import { assert, Equals, Primitive } from 'common';

describe(`Primitive`, () => {
  it(`works`, () => {
    assert<
      Equals<
        Primitive,
        bigint | boolean | null | number | string | symbol | undefined
      >
    >();
  });
});

import * as B from 'boolean';
import { assert, IsAny } from 'common';

describe(`IsAny`, () => {
  it(`works`, () => {
    assert<IsAny<any>>();
    assert<
      B.Not<
        IsAny<
          | number
          | string
          | boolean
          | object
          | undefined
          | null
          | bigint
          | symbol
        >
      >
    >();
    assert<B.Not<IsAny<unknown>>>();
    assert<B.Not<IsAny<never>>>();
  });
});

import { assert, Equals } from 'common';
import * as U from 'union';

describe(`U.ToIntersection`, () => {
  it(`works`, () => {
    assert<
      Equals<
        U.ToIntersection<{ a: number } | { b: boolean }>,
        { a: number } & { b: boolean }
      >
    >();
  });
});

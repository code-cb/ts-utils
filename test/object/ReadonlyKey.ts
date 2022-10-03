import { assert, Equals } from 'common';
import * as O from 'object';

describe(`O.ReadonlyKey`, () => {
  it(`works`, () => {
    assert<Equals<O.ReadonlyKey<{ a: number; b: string }>, never>>();
    assert<
      Equals<
        O.ReadonlyKey<{
          readonly a: number;
          b: string;
          readonly c?: boolean;
          d?: object;
        }>,
        'a' | 'c'
      >
    >();
  });
});

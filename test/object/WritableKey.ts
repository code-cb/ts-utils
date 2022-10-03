import { assert, Equals } from 'common';
import * as O from 'object';

describe(`O.WritableKey`, () => {
  it(`works`, () => {
    assert<
      Equals<O.WritableKey<{ readonly a: number; readonly b: string }>, never>
    >();
    assert<
      Equals<
        O.WritableKey<{
          readonly a: number;
          b: string;
          readonly c?: boolean;
          d?: object;
        }>,
        'b' | 'd'
      >
    >();
  });
});

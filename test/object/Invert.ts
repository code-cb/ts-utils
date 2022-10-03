import { assert, IsEqual } from 'common';
import * as O from 'object';

describe(`O.Invert`, () => {
  it(`works`, () => {
    assert<IsEqual<O.Invert<{ a: 1; b: 2 }>, { '1': 'a'; '2': 'b' }>>();
  });
});

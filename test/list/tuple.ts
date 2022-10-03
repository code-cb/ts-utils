import { assert, Equals } from 'common';
import * as L from 'list';

describe(`L.tuple`, () => {
  it(`works`, () => {
    const t1 = L.tuple('a', 1, false);
    assert<Equals<typeof t1, [string, number, boolean]>>();
    assert<L.IsLiteral<typeof t1>>();
    assert<Equals<L.Literal<typeof t1>, [string, number, boolean]>>();
    expect(t1).toEqual(['a', 1, false]);
  });
});

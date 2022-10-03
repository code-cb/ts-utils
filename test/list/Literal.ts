import * as B from 'boolean';
import { assert, Equals } from 'common';
import * as L from 'list';

describe(`L.IsLiteral and L.Literal`, () => {
  it(`works`, () => {
    const t1 = ['a', 1, false] as const;
    assert<Equals<typeof t1, readonly ['a', 1, false]>>();
    assert<L.IsLiteral<typeof t1>>();
    assert<Equals<L.Literal<typeof t1>, readonly ['a', 1, false]>>();

    const t2 = L.tuple('a', 1, false);
    assert<Equals<typeof t2, [string, number, boolean]>>();
    assert<L.IsLiteral<typeof t2>>();
    assert<Equals<L.Literal<typeof t2>, [string, number, boolean]>>();

    const t3 = ['a', 1, false];
    assert<B.Not<L.IsLiteral<typeof t3>>>();
    assert<Equals<L.Literal<typeof t3>, never>>();
  });
});

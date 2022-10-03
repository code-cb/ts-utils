import { assert, Equals } from 'common';
import * as L from 'list';

describe(`L.Last and L.last`, () => {
  it(`works`, () => {
    assert<Equals<L.Last<[]>, never>>();
    const v1 = L.last([] as const);
    assert<Equals<typeof v1, undefined>>();
    expect(v1).toBe(undefined);

    assert<Equals<L.Last<[9, 5, 2]>, 2>>();
    assert<Equals<L.Last<readonly [9, 5, 2]>, 2>>();
    const v2 = L.last([9, 5, 2] as const);
    assert<Equals<typeof v2, 2>>();
    expect(v2).toBe(2);

    assert<Equals<L.Last<number[]>, number | undefined>>();
    assert<Equals<L.Last<readonly number[]>, number | undefined>>();
    const v3 = L.last([2, 6, 3]);
    assert<Equals<typeof v3, number | undefined>>();
    expect(v3).toBe(3);

    type Char = 'a' | 'b' | 'c' | 'd';
    assert<Equals<L.Last<['a', 'b', 'c'], Char>, 'c'>>();
    assert<Equals<L.Last<['d', 'e', 'f'], Char>, never>>();
  });
});

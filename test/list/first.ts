import { assert, Equals } from 'common';
import * as L from 'list';

describe(`L.First and L.first`, () => {
  it(`works`, () => {
    assert<Equals<L.First<[]>, never>>();
    const f1 = L.first([] as const);
    assert<Equals<typeof f1, undefined>>();
    expect(f1).toBe(undefined);

    assert<Equals<L.First<[9, 5, 2]>, 9>>();
    assert<Equals<L.First<readonly [9, 5, 2]>, 9>>();
    const f2 = L.first([9, 5, 2] as const);
    assert<Equals<typeof f2, 9>>();
    expect(f2).toBe(9);

    assert<Equals<L.First<number[]>, number>>();
    assert<Equals<L.First<readonly number[]>, number>>();
    const f3 = L.first([2, 6, 3]);
    assert<Equals<typeof f3, number | undefined>>();
    expect(f3).toBe(2);

    type Char = 'a' | 'b' | 'c' | 'd';
    assert<Equals<L.First<['a', 'b', 'c'], Char>, 'a'>>();
    assert<Equals<L.First<['f', 'e', 'd'], Char>, never>>();
  });
});

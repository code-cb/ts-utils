import { assert, Equals } from 'common';
import * as L from 'list';

describe(`L.Head and L.head`, () => {
  it(`works`, () => {
    assert<Equals<L.Head<[]>, never>>();
    const h1 = L.head([]);
    assert<Equals<typeof h1, []>>();
    expect(h1).toEqual([]);

    assert<Equals<L.Head<readonly [1]>, []>>();
    const h2 = L.head([1] as const);
    assert<Equals<typeof h2, []>>();
    expect(h2).toEqual([]);

    assert<Equals<L.Head<readonly [1, 2, 3, 4, 5]>, [1, 2, 3, 4]>>();
    const h3 = L.head([1, 2, 3, 4, 5] as const);
    assert<Equals<typeof h3, [1, 2, 3, 4]>>();
    expect(h3).toEqual([1, 2, 3, 4]);

    assert<Equals<L.Head<number[]>, number[]>>();
    const h4 = L.head([5, 4, 3, 2, 1]);
    assert<Equals<typeof h4, number[]>>();
    expect(h4).toEqual([5, 4, 3, 2]);

    assert<Equals<L.Head<readonly Function[]>, Function[]>>();

    type Char = 'a' | 'b' | 'c' | 'd';
    assert<Equals<L.Head<['a', 'b', 'c'], Char>, ['a', 'b']>>();
    assert<Equals<L.Head<['d', 'e', 'f'], Char>, never>>();
  });
});

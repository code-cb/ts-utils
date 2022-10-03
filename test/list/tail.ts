import { assert, Equals } from 'common';
import * as L from 'list';

describe(`L.Tail and L.tail`, () => {
  it(`works`, () => {
    assert<Equals<L.Tail<[]>, never>>();
    const t1 = L.tail([]);
    assert<Equals<typeof t1, []>>();
    expect(t1).toEqual([]);

    assert<Equals<L.Tail<readonly [1]>, []>>();
    const t2 = L.tail([1] as const);
    assert<Equals<typeof t2, []>>();
    expect(t2).toEqual([]);

    assert<Equals<L.Tail<readonly [1, 2, 3, 4, 5]>, [2, 3, 4, 5]>>();
    const t3 = L.tail([1, 2, 3, 4, 5] as const);
    assert<Equals<typeof t3, [2, 3, 4, 5]>>();
    expect(t3).toEqual([2, 3, 4, 5]);

    assert<Equals<L.Tail<number[]>, number[]>>();
    const t4 = L.tail([5, 4, 3, 2, 1]);
    assert<Equals<typeof t4, number[]>>();
    expect(t4).toEqual([4, 3, 2, 1]);

    assert<Equals<L.Tail<readonly Function[]>, Function[]>>();

    type Char = 'a' | 'b' | 'c' | 'd';
    assert<Equals<L.Tail<['a', 'b', 'c'], Char>, ['b', 'c']>>();
    assert<Equals<L.Tail<['d', 'e', 'f'], Char>, never>>();
  });
});

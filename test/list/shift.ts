import { assert, Equals } from 'common';
import * as L from 'list';

describe(`L.Shift and L.shift`, () => {
  it(`works`, () => {
    assert<Equals<L.Shift<[number, string, boolean]>, number>>();
    const v1 = L.shift(L.tuple(1, 'a', false));
    assert<Equals<typeof v1, number>>();
    expect(v1).toBe(1);

    assert<Equals<L.Shift<number[]>, number | undefined>>();
    const v2 = L.shift([3, 2, 1]);
    assert<Equals<typeof v2, number | undefined>>();
    expect(v2).toBe(3);

    assert<Equals<L.Shift<[]>, undefined>>();
    const v3 = L.shift([]);
    assert<Equals<typeof v3, undefined>>();
    expect(v3).toBe(undefined);
  });
});

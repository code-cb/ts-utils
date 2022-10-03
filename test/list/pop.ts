import { assert, Equals } from 'common';
import * as L from 'list';

describe(`L.Pop and L.pop`, () => {
  it(`works`, () => {
    assert<Equals<L.Pop<[number, string, boolean]>, boolean>>();
    const v1 = L.pop(L.tuple(1, 'a', false));
    assert<Equals<typeof v1, boolean>>();
    expect(v1).toBe(false);

    assert<Equals<L.Pop<number[]>, number | undefined>>();
    const v2 = L.pop([3, 2, 1]);
    assert<Equals<typeof v2, number | undefined>>();
    expect(v2).toBe(1);

    assert<Equals<L.Pop<[]>, undefined>>();
    const v3 = L.pop([]);
    assert<Equals<typeof v3, undefined>>();
    expect(v3).toBe(undefined);
  });
});

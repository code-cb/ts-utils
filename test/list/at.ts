import { assert, Equals } from 'common';
import * as L from 'list';

describe(`L.At and L.at`, () => {
  it(`works`, () => {
    assert<Equals<L.At<[], 0>, undefined>>();
    const a0 = L.at([] as const, 0);
    assert<Equals<typeof a0, undefined>>();
    expect(a0).toBe(undefined);

    const arr1 = [1, 2, 3, 4, 5] as const;
    type Arr1 = typeof arr1;

    assert<Equals<L.At<Arr1, 0>, 1>>();
    const a1 = L.at(arr1, 0);
    assert<Equals<typeof a1, 1>>();
    expect(a1).toBe(1);

    assert<Equals<L.At<Arr1, 2>, 3>>();
    const a2 = L.at(arr1, 2);
    assert<Equals<typeof a2, 3>>();
    expect(a2).toBe(3);

    assert<Equals<L.At<Arr1, 4>, 5>>();
    const a3 = L.at(arr1, 4);
    assert<Equals<typeof a3, 5>>();
    expect(a3).toBe(5);

    assert<Equals<L.At<Arr1, 6>, undefined>>();
    const a4 = L.at(arr1, 6);
    assert<Equals<typeof a4, undefined>>();
    expect(a4).toBe(undefined);

    assert<Equals<L.At<Arr1, -1>, 5>>();
    const a5 = L.at(arr1, -1);
    assert<Equals<typeof a5, 5>>();
    expect(a5).toBe(5);

    assert<Equals<L.At<Arr1, -4>, 2>>();
    const a6 = L.at(arr1, -4);
    assert<Equals<typeof a6, 2>>();
    expect(a6).toBe(2);

    assert<Equals<L.At<Arr1, -7>, undefined>>();
    const a7 = L.at(arr1, -7);
    assert<Equals<typeof a7, undefined>>();
    expect(a7).toBe(undefined);

    assert<Equals<L.At<Arr1, number>, 1 | 2 | 3 | 4 | 5 | undefined>>();
    const a8 = L.at(arr1, Number(5));
    assert<Equals<typeof a8, 1 | 2 | 3 | 4 | 5 | undefined>>();
    expect(a8).toBe(undefined);

    assert<Equals<L.At<number[], 5>, number | undefined>>();
    const a9 = L.at([1, 2, 3], 1);
    assert<Equals<typeof a9, number | undefined>>();
    expect(a9).toBe(2);
  });
});

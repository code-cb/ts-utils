import { assert, Equals } from 'common';
import * as L from 'list';

describe(`L.FilterIn and L.filterIn`, () => {
  it(`works`, () => {
    const arr1 = [1, 2, 3, 4, 5] as const;
    type Arr1 = typeof arr1;

    assert<Equals<L.FilterIn<Arr1, never>, []>>();
    const f1 = L.filterIn(arr1, []);
    assert<Equals<typeof f1, []>>();
    expect(f1).toEqual([]);

    assert<Equals<L.FilterIn<Arr1, 3>, [3]>>();
    const f2 = L.filterIn(arr1, 3 as const);
    assert<Equals<typeof f2, [3]>>();
    expect(f2).toEqual([3]);
    const f3 = L.filterIn(arr1, [3] as const);
    assert<Equals<typeof f3, [3]>>();
    expect(f3).toEqual([3]);

    assert<Equals<L.FilterIn<Arr1, 3 | 2 | 5 | 4 | 1>, [1, 2, 3, 4, 5]>>();
    const f4 = L.filterIn(arr1, [3, 2, 5, 4, 1]);
    assert<Equals<typeof f4, [1, 2, 3, 4, 5]>>();
    expect(f4).toEqual([1, 2, 3, 4, 5]);

    assert<Equals<L.FilterIn<Arr1, 0 | 6 | 8>, []>>();
    const f5 = L.filterIn(arr1, 8 as const);
    assert<Equals<typeof f5, []>>();
    expect(f5).toEqual([]);
    const f6 = L.filterIn(arr1, [0, 6, 8] as const);
    assert<Equals<typeof f6, []>>();
    expect(f6).toEqual([]);

    assert<Equals<L.FilterIn<Arr1, number>, [1, 2, 3, 4, 5]>>();
    const f7 = L.filterIn(arr1, 1);
    assert<Equals<typeof f7, [1, 2, 3, 4, 5]>>(); // Oops! `number[]` is more correct - This should be used with literal types only
    expect(f7).toEqual([1]);
    const f8 = L.filterIn(arr1, [2, 3, 1]);
    assert<Equals<typeof f8, [1, 2, 3, 4, 5]>>(); // Oops! `number[]` is more correct - This should be used with literal types only
    expect(f8).toEqual([1, 2, 3]);

    assert<
      Equals<L.FilterIn<readonly number[], 6 | 5 | 8 | 9 | 4>, number[]>
    >();
    const f9 = L.filterIn([1, 2, 3, 4, 5], [6, 5, 8, 9, 4] as const);
    assert<Equals<typeof f9, number[]>>();
    expect(f9).toEqual([4, 5]);

    assert<Equals<L.FilterIn<[never, never], number>, []>>();
  });
});

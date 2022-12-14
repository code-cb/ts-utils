import { assert, Equals } from 'common';
import * as L from 'list';

describe(`L.FilterOut and L.filterOut`, () => {
  it(`works`, () => {
    const arr1 = [1, 2, 3, 4, 5] as const;
    type Arr1 = typeof arr1;

    assert<Equals<L.FilterOut<Arr1, never>, [1, 2, 3, 4, 5]>>();
    const f1 = L.filterOut(arr1, []);
    assert<Equals<typeof f1, [1, 2, 3, 4, 5]>>();
    expect(f1).toEqual([1, 2, 3, 4, 5]);

    assert<Equals<L.FilterOut<Arr1, 3>, [1, 2, 4, 5]>>();
    const f2 = L.filterOut(arr1, 3 as const);
    assert<Equals<typeof f2, [1, 2, 4, 5]>>();
    expect(f2).toEqual([1, 2, 4, 5]);
    const f3 = L.filterOut(arr1, [3] as const);
    assert<Equals<typeof f3, [1, 2, 4, 5]>>();
    expect(f3).toEqual([1, 2, 4, 5]);

    assert<Equals<L.FilterOut<Arr1, 3 | 2 | 5 | 4 | 1>, []>>();
    const f4 = L.filterOut(arr1, [3, 2, 5, 4, 1]);
    assert<Equals<typeof f4, []>>();
    expect(f4).toEqual([]);

    assert<Equals<L.FilterOut<Arr1, 0 | 6 | 8>, [1, 2, 3, 4, 5]>>();
    const f5 = L.filterOut(arr1, 8 as const);
    assert<Equals<typeof f5, [1, 2, 3, 4, 5]>>();
    expect(f5).toEqual([1, 2, 3, 4, 5]);
    const f6 = L.filterOut(arr1, [0, 6, 8] as const);
    assert<Equals<typeof f6, [1, 2, 3, 4, 5]>>();
    expect(f6).toEqual([1, 2, 3, 4, 5]);

    assert<Equals<L.FilterOut<Arr1, number>, []>>();
    const f7 = L.filterOut(arr1, 1);
    assert<Equals<typeof f7, []>>(); // Oops! `number[]` is more correct - This should be used with literal types only
    expect(f7).toEqual([2, 3, 4, 5]);
    const f8 = L.filterOut(arr1, [1, 2, 3]);
    assert<Equals<typeof f8, []>>(); // Oops! `number[]` is more correct - This should be used with literal types only
    expect(f8).toEqual([4, 5]);

    assert<
      Equals<L.FilterOut<readonly number[], 6 | 5 | 8 | 9 | 4>, number[]>
    >();
    const f9 = L.filterOut([1, 2, 3, 4, 5], [6, 5, 8, 9, 4] as const);
    assert<Equals<typeof f9, number[]>>();
    expect(f9).toEqual([1, 2, 3]);
  });
});

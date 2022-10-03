import { assert, Equals } from 'common';
import * as L from 'list';

describe(`L.IsEmpty and L.isEmpty`, () => {
  it(`works`, () => {
    assert<Equals<L.IsEmpty<[]>, true>>();
    expect(L.isEmpty([])).toBe(true);

    assert<Equals<L.IsEmpty<[2, 3]>, false>>();
    expect(L.isEmpty([2, 3])).toBe(false);

    assert<Equals<L.IsEmpty<object[]>, boolean>>();

    (arr: ReadonlyArray<number>) => {
      if (L.isEmpty(arr)) {
        assert<Equals<typeof arr, readonly []>>();
        assert<Equals<typeof arr.length, 0>>();
        // @ts-expect-error
        console.log(arr[1]);
      }
    };

    (arr: Array<number>) => {
      if (L.isEmpty(arr)) {
        assert<Equals<typeof arr, []>>();
        assert<Equals<typeof arr.length, 0>>();
        // @ts-expect-error
        console.log(arr[1]);
      }
    };
  });
});

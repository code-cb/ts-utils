import { assert, Equals } from '../../src/common';
import * as L from '../../src/list';

export const f1 = (arr: ReadonlyArray<number>) => {
  if (L.isEmpty(arr)) {
    assert<Equals<typeof arr, readonly []>>();
    assert<Equals<typeof arr.length, 0>>();
    // @ts-expect-error
    console.log(arr[1]);
  }
};

export const f2 = (arr: Array<number>) => {
  if (L.isEmpty(arr)) {
    assert<Equals<typeof arr, []>>();
    assert<Equals<typeof arr.length, 0>>();
    // @ts-expect-error
    console.log(arr[1]);
  }
};

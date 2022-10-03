import { assert, Equals } from 'common';
import * as L from 'list';

describe(`L.SubList`, () => {
  it(`works`, () => {
    assert<Equals<L.SubList<[]>, []>>();
    assert<Equals<L.SubList<readonly [1]>, [] | [1]>>();
    assert<
      Equals<
        L.SubList<readonly [1, 2, 3, 4, 5]>,
        [] | [1] | [1, 2] | [1, 2, 3] | [1, 2, 3, 4] | [1, 2, 3, 4, 5]
      >
    >();
    assert<Equals<L.SubList<number[]>, number[]>>();
    assert<Equals<L.SubList<readonly Function[]>, Function[]>>();
  });
});

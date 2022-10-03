import { assert, Equals } from 'common';
import * as N from 'number';

describe(`N.Range`, () => {
  it(`works`, () => {
    assert<Equals<N.Range<-2, 3, 'forward'>, [-2, -1, 0, 1, 2]>>();
    assert<Equals<N.Range<23, 23, 'forward'>, []>>();
    assert<Equals<N.Range<3, -2, 'backward'>, [3, 2, 1, 0, -1]>>();
    assert<Equals<N.Range<-78, -78, 'backward'>, []>>();
  });
});

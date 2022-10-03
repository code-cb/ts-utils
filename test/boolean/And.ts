import * as B from 'boolean';
import { assert, Equals } from 'common';

describe(`B.And`, () => {
  it(`works`, () => {
    assert<Equals<B.And<true, true>, true>>();
    assert<Equals<B.And<true, false>, false>>();
    assert<Equals<B.And<false, true>, false>>();
    assert<Equals<B.And<false, false>, false>>();
    assert<Equals<B.And<boolean, true>, boolean>>();
    assert<Equals<B.And<true, boolean>, boolean>>();
    assert<Equals<B.And<boolean, false>, false>>();
    assert<Equals<B.And<false, boolean>, false>>();
  });
});

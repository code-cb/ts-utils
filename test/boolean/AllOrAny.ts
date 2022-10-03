import * as B from 'boolean';
import { assert, Equals } from 'common';

describe(`B.All`, () => {
  it(`works`, () => {
    assert<Equals<B.All<[]>, true>>();
    assert<Equals<B.All<[false]>, false>>();
    assert<Equals<B.All<[true]>, true>>();
    assert<Equals<B.All<[false, false]>, false>>();
    assert<Equals<B.All<[false, true]>, false>>();
    assert<Equals<B.All<[true, true]>, true>>();
    assert<Equals<B.All<[true, boolean]>, boolean>>();
    assert<Equals<B.All<[false, boolean]>, false>>();
    assert<Equals<B.All<false[]>, false>>();
    assert<Equals<B.All<true[]>, true>>();
    assert<Equals<B.All<boolean[]>, boolean>>();
  });
});

describe(`B.Any`, () => {
  it(`works`, () => {
    assert<Equals<B.Any<[]>, false>>();
    assert<Equals<B.Any<[false]>, false>>();
    assert<Equals<B.Any<[true]>, true>>();
    assert<Equals<B.Any<[false, false]>, false>>();
    assert<Equals<B.Any<[false, true]>, true>>();
    assert<Equals<B.Any<[true, true]>, true>>();
    assert<Equals<B.Any<[true, boolean]>, true>>();
    assert<Equals<B.Any<[false, boolean]>, boolean>>();
    assert<Equals<B.Any<false[]>, false>>();
    assert<Equals<B.Any<true[]>, true>>();
    assert<Equals<B.Any<boolean[]>, boolean>>();
  });
});

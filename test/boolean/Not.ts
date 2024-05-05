import * as B from 'boolean';
import { assert, Equals } from 'common';

describe(`B.Not`, () => {
  it(`works`, () => {
    type Not<Value extends boolean> = B.Not<Value>;
    assert<Equals<Not<true>, false>>();
    assert<Equals<Not<false>, true>>();
    assert<Equals<Not<boolean>, boolean>>();
  });

  test(`alternative to B.Not - 1`, () => {
    type Not<Value extends boolean> =
      Equals<Value, true> extends true
        ? false
        : Equals<Value, false> extends true
          ? true
          : never;
    assert<Equals<Not<true>, false>>();
    assert<Equals<Not<false>, true>>();
    assert<Equals<Not<boolean>, never>>(); // OK?
  });

  test(`alternative to B.Not - 2`, () => {
    type Not<T extends boolean> = T extends true ? false : true;
    assert<Equals<Not<true>, false>>();
    assert<Equals<Not<false>, true>>();
    assert<Equals<Not<boolean>, boolean>>();
  });
});

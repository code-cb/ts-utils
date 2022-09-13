import * as B from '../../sources/boolean';
import { assert, Equals } from '../../sources/common';

export namespace Main {
  type Not<Value extends boolean> = B.Not<Value>;
  assert<Equals<Not<true>, false>>();
  assert<Equals<Not<false>, true>>();
  assert<Equals<Not<boolean>, boolean>>();
}

/**
 * Alternative implementations of `Not`
 */
export namespace A1 {
  type Not<Value extends boolean> = Equals<Value, true> extends true
    ? false
    : Equals<Value, false> extends true
    ? true
    : never;
  assert<Equals<Not<true>, false>>();
  assert<Equals<Not<false>, true>>();
  assert<Equals<Not<boolean>, never>>(); // OK?
}

export namespace A2 {
  type Not<T extends boolean> = T extends true ? false : true;
  assert<Equals<Not<true>, false>>();
  assert<Equals<Not<false>, true>>();
  assert<Equals<Not<boolean>, boolean>>();
}

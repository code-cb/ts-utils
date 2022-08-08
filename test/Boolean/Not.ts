import { assert, B, Equals } from '../../src/index.js';

export namespace Main {
  type Not<T extends boolean> = B.Not<T>;
  assert<Equals<Not<true>, false>>();
  assert<Equals<Not<false>, true>>();
  assert<Equals<Not<boolean>, boolean>>();
}

/**
 * Alternative implementations of `Not`
 */
export namespace A1 {
  type Not<T extends boolean> = Equals<T, true> extends true
    ? false
    : Equals<T, false> extends true
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

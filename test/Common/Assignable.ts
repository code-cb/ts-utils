import * as B from '../../src/boolean/index.js';
import { assert, Assignable, Equals } from '../../src/common/index.js';

export namespace Main {
  assert<Assignable<'a', 'a' | 'b'>>();
  assert<B.Not<Assignable<'a' | 'b', 'a'>>>();
  assert<Assignable<{ a: 4; b: 5 }, { b: 5 }>>();
  assert<B.Not<Assignable<{ b: 5 }, { a: 4; b: 5 }>>>();
  assert<Assignable<{ a: string }, { a: any }>>();
  assert<B.Not<Assignable<never, never>>>();
  assert<Assignable<Function, unknown>>();
  assert<B.Not<Assignable<unknown, number>>>();
  assert<Assignable<unknown, unknown>>();
  assert<Assignable<any, unknown>>();
  assert<Assignable<unknown, any>>();
}

/**
 * Alternative implementations of `Assignable`
 */
export namespace A1 {
  type Assignable<A, B> = (() => A) extends () => never
    ? false
    : (() => A) extends () => B
    ? true
    : false;
  assert<Assignable<'a', 'a' | 'b'>>();
  assert<B.Not<Assignable<'a' | 'b', 'a'>>>();
  assert<Assignable<{ a: 4; b: 5 }, { b: 5 }>>();
  assert<B.Not<Assignable<{ b: 5 }, { a: 4; b: 5 }>>>();
  assert<Assignable<{ a: string }, { a: any }>>();
  assert<B.Not<Assignable<never, never>>>();
  assert<Assignable<Function, unknown>>();
  assert<B.Not<Assignable<unknown, number>>>();
  assert<Assignable<unknown, unknown>>();
  assert<Assignable<any, unknown>>();
  assert<Assignable<unknown, any>>();
}

export namespace A2 {
  export type Assignable<A, B> = [A] extends [never]
    ? false
    : A extends B
    ? true
    : false;
  assert<Assignable<'a', 'a' | 'b'>>();
  assert<Equals<Assignable<'a' | 'b', 'a'>, boolean>>(); // Hmmm...
  assert<Assignable<{ a: 4; b: 5 }, { b: 5 }>>();
  assert<B.Not<Assignable<{ b: 5 }, { a: 4; b: 5 }>>>();
  assert<Assignable<{ a: string }, { a: any }>>();
  assert<B.Not<Assignable<never, never>>>();
  assert<Assignable<Function, unknown>>();
  assert<B.Not<Assignable<unknown, number>>>();
  assert<Assignable<unknown, unknown>>();
  assert<Assignable<any, unknown>>();
  assert<Assignable<unknown, any>>();
}

export namespace A3 {
  type Assignable<A, B> = A2.Assignable<A, B> extends true ? true : false;
  assert<Assignable<'a', 'a' | 'b'>>();
  assert<B.Not<Assignable<'a' | 'b', 'a'>>>(); // Voila!
  assert<Assignable<{ a: 4; b: 5 }, { b: 5 }>>();
  assert<B.Not<Assignable<{ b: 5 }, { a: 4; b: 5 }>>>();
  assert<Assignable<{ a: string }, { a: any }>>();
  assert<B.Not<Assignable<never, never>>>();
  assert<Assignable<Function, unknown>>();
  assert<B.Not<Assignable<unknown, number>>>();
  assert<Assignable<unknown, unknown>>();
  assert<Assignable<any, unknown>>();
  assert<Assignable<unknown, any>>();
}

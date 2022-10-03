import * as B from 'boolean';
import { assert, assignable, Assignable, Equals } from 'common';
import * as O from 'object';

describe(`Assignable`, () => {
  it(`works`, () => {
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
  });

  test(`alternative to Assignable - 1`, () => {
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
  });

  test(`alternative to Assignable - 2`, () => {
    type Assignable<A, B> = [A] extends [never]
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
  });
});

describe(`assignable`, () => {
  it(`works`, () => {
    assignable<number>(42);
    assignable<O.Dict<Function>>({ run: () => {} });
    assignable<{ a?: number; b?: string }>({ a: 42 });
  });
});

import * as B from 'boolean';
import { assert, Assignable, Equals, IsEqual } from 'common';

describe(`IsEqual`, () => {
  it(`works`, () => {
    const fromKeys = <Key extends PropertyKey>(keys: readonly Key[]) =>
      Object.fromEntries(
        keys.map(key => [key, Math.random().toString()]),
      ) as Record<Key, string>;

    type EntryTuple<
      K extends PropertyKey = PropertyKey,
      V = unknown,
    > = readonly [K, V];

    type Objectify<U extends EntryTuple> = {
      [K in U[0]]: Extract<U, readonly [K, unknown]>[1];
    };

    const fromEntries = <Entry extends EntryTuple>(entries: Entry[]) =>
      Object.fromEntries(entries) as Objectify<Entry>;

    const o1 = fromKeys(['a', 'b']);
    assert<IsEqual<typeof o1, { a: string; b: string }>>();

    assert<IsEqual<Objectify<['a', 1] | ['b', 2]>, { a: 1; b: 2 }>>();

    const o2 = fromEntries([['a', 1] as const, ['b', 2] as const]);
    assert<IsEqual<typeof o2, { a: 1; b: 2 }>>();

    interface Options {
      a?: number;
      b?: string;
      c?: boolean;
    }
    ({ a, b, ...rest }: Options) => {
      assert<IsEqual<typeof rest, { c?: boolean }>>();
    };
  });
});

describe(`Equals`, () => {
  it(`works`, () => {
    assert<Equals<1, 1>>();
    assert<B.Not<Equals<1, 2>>>();
    assert<Equals<{ a: 1; b: 2 }, { a: 1 } & { b: 2 }>>();
    assert<B.Not<Equals<{ a: 1; b: 2 }, { a: 1 } | { b: 2 }>>>();
    assert<Equals<NonNullable<number | null | undefined>, number>>();
    assert<Equals<Partial<{ a: 1; b: 2; c: 3 }>, { a?: 1; b?: 2; c?: 3 }>>();
    assert<B.Not<Equals<any, object>>>(); // Cool!
    assert<B.Not<Equals<object, unknown>>>();
    assert<Equals<never, never>>(); // Ah ha!
  });

  test(`alternative to Equals`, () => {
    type Equals<A, B> =
      Assignable<A, B> extends true
        ? Assignable<B, A> extends true
          ? true
          : false
        : false;
    assert<Equals<1, 1>>();
    assert<B.Not<Equals<1, 2>>>();
    assert<Equals<{ a: 1; b: 2 }, { a: 1 } & { b: 2 }>>();
    assert<B.Not<Equals<{ a: 1; b: 2 }, { a: 1 } | { b: 2 }>>>();
    assert<Equals<NonNullable<number | null | undefined>, number>>();
    assert<Equals<Partial<{ a: 1; b: 2; c: 3 }>, { a?: 1; b?: 2; c?: 3 }>>();
    assert<Equals<any, object>>(); // Oops!
    assert<B.Not<Equals<unknown, object>>>();
    assert<B.Not<Equals<never, never>>>(); // Wow!
  });
});

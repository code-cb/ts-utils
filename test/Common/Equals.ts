import * as B from '../../src/boolean/index.js';
import { assert, Assignable, Equals, IsEqual } from '../../src/common/index.js';

declare const fromKeys: <Key extends PropertyKey>(
  keys: readonly Key[],
) => Record<Key, string>;
const o1 = fromKeys(['a', 'b']);
assert<IsEqual<typeof o1, { a: string; b: string }>>();

type EntryTuple<K extends PropertyKey = PropertyKey, V = unknown> = readonly [
  K,
  V,
];
type Objectify<U extends EntryTuple> = {
  [K in U[0]]: Extract<U, readonly [K, unknown]>[1];
};
assert<IsEqual<Objectify<['a', 1] | ['b', 2]>, { a: 1; b: 2 }>>();

declare const fromEntries: <Entry extends EntryTuple>(
  entries: Entry[],
) => Objectify<Entry>;
const o = fromEntries([['a', 1] as const, ['b', 2] as const]);
assert<IsEqual<typeof o, { a: 1; b: 2 }>>();

interface Options {
  a?: number;
  b?: string;
  c?: boolean;
}
(({ a, b, c, ...rest }: Options) => {
  assert<IsEqual<typeof rest, {}>>();
})({});

export namespace Main {
  assert<Equals<1, 1>>();
  assert<B.Not<Equals<1, 2>>>();
  assert<Equals<{ a: 1; b: 2 }, { a: 1 } & { b: 2 }>>();
  assert<B.Not<Equals<{ a: 1; b: 2 }, { a: 1 } | { b: 2 }>>>();
  assert<Equals<NonNullable<number | null | undefined>, number>>();
  assert<Equals<Partial<{ a: 1; b: 2; c: 3 }>, { a?: 1; b?: 2; c?: 3 }>>();
  assert<B.Not<Equals<any, object>>>(); // Cool!
  assert<B.Not<Equals<object, unknown>>>();
  assert<Equals<never, never>>(); // Ah ha!
}

/**
 * Alternative implementation of `Equals`
 */
export namespace A1 {
  type Equals<A, B> = Assignable<A, B> extends true
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
}

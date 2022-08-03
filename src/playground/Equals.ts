import { assert, Assignable, Equals, Not } from '../index.js';

assert<Equals<1, 1>>();
assert<Not<Equals<1, 2>>>();
assert<Equals<{ a: 1; b: 2 }, { a: 1 } & { b: 2 }>>();
assert<Not<Equals<{ a: 1; b: 2 }, { a: 1 } | { b: 2 }>>>();
assert<Equals<NonNullable<number | null | undefined>, number>>();
assert<Equals<Partial<{ a: 1; b: 2; c: 3 }>, { a?: 1; b?: 2; c?: 3 }>>();
assert<Not<Equals<any, object>>>(); // Cool!
assert<Not<Equals<object, unknown>>>();

declare const fromKeys: <Key extends PropertyKey>(
  keys: readonly Key[],
) => Record<Key, string>;
const o1 = fromKeys(['a', 'b']);
assert<Equals<typeof o1, { a: string; b: string }>>();

type EntryTuple<K extends PropertyKey = PropertyKey, V = unknown> = readonly [
  K,
  V,
];
type Objectify<U extends EntryTuple> = {
  [K in U[0]]: Extract<U, readonly [K, unknown]>[1];
};
assert<Equals<Objectify<['a', 1] | ['b', 2]>, { a: 1; b: 2 }>>();

declare const fromEntries: <Entry extends EntryTuple>(
  entries: Entry[],
) => Objectify<Entry>;
const o = fromEntries([['a', 1] as const, ['b', 2] as const]);
assert<Equals<typeof o, { a: 1; b: 2 }>>();

interface Options {
  a?: number;
  b?: string;
  c?: boolean;
}
(({ a, b, c, ...rest }: Options) => {
  assert<Equals<typeof rest, {}>>();
})({});

type Equals2<A, B> = Assignable<A, B> extends true
  ? Assignable<B, A> extends true
    ? true
    : false
  : false;

assert<Equals2<1, 1>>();
assert<Not<Equals2<1, 2>>>();
assert<Equals2<{ a: 1; b: 2 }, { a: 1 } & { b: 2 }>>();
assert<Not<Equals2<{ a: 1; b: 2 }, { a: 1 } | { b: 2 }>>>();
assert<Equals2<NonNullable<number | null | undefined>, number>>();
assert<Equals2<Partial<{ a: 1; b: 2; c: 3 }>, { a?: 1; b?: 2; c?: 3 }>>();
assert<Equals2<any, object>>(); // Oops!
assert<Not<Equals2<unknown, object>>>();

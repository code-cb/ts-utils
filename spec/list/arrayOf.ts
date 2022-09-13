import { assert, Equals } from 'common';
import * as L from 'list';

type E = 'a' | 'b' | 'c';

export const a1 = L.arrayOf<E>()([]);
assert<Equals<typeof a1, never[]>>();

export const a2 = L.arrayOf<E>()(['a', 'b']);
assert<Equals<typeof a2, ('a' | 'b')[]>>();

// @ts-expect-error
export const a3 = L.arrayOf<E>()(['a', 'd']);

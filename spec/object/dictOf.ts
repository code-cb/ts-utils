import { assert, Equals } from '../../sources/common';
import * as O from '../../sources/object';

type E = 'a' | 'b' | 'c';

export const d1 = O.dictOf<E>()({});
assert<Equals<typeof d1, {}>>();

export const d2 = O.dictOf<E>()({ a: 'a', b: 'b' });
assert<Equals<typeof d2, { a: 'a'; b: 'b' }>>();

export const d3 = O.dictOf<E, number>()({ 1: 'a', 2: 'b' });
assert<Equals<typeof d3, { 1: 'a'; 2: 'b' }>>();

// @ts-expect-error
export const d4 = O.dictOf<E>()({ a: 'a', d: 'd' });

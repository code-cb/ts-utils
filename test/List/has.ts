import { assert, Equals } from '../../src/common';
import * as L from '../../src/list';

const set = new Set(['a', 'b', 'c'] as const);

export const f1 = (s: 'b' | 'c' | 'd' | undefined) => {
  if (L.has(set, s)) assert<Equals<typeof s, 'b' | 'c'>>();
  else assert<Equals<typeof s, 'd' | undefined>>();
};

const map = new Map([
  ['a', 1],
  ['b', 2],
  ['c', 3],
] as const);

export const f2 = (s: 'b' | 'c' | 'd' | undefined) => {
  if (L.has(map, s)) assert<Equals<typeof s, 'b' | 'c'>>();
  else assert<Equals<typeof s, 'd' | undefined>>();
};

const tuple = ['a', 'b', 'c'] as const;

export const f3 = (s: 'b' | 'c' | 'd' | undefined) => {
  if (L.has(tuple, s)) assert<Equals<typeof s, 'b' | 'c'>>();
  else assert<Equals<typeof s, 'd' | undefined>>();
};

import { assert, Equals } from 'common';
import * as L from 'list';

describe(`L.has`, () => {
  it(`works`, () => {
    const set = new Set(['a', 'b', 'c'] as const);
    (s: 'b' | 'c' | 'd' | undefined) => {
      if (L.has(set, s)) assert<Equals<typeof s, 'b' | 'c'>>();
      else assert<Equals<typeof s, 'd' | undefined>>();
    };
    expect(L.has(set, 'c')).toBe(true);
    expect(L.has(set, 'd')).toBe(false);

    const map = new Map([
      ['a', 1],
      ['b', 2],
      ['c', 3],
    ] as const);
    (s: 'b' | 'c' | 'd' | undefined) => {
      if (L.has(map, s)) assert<Equals<typeof s, 'b' | 'c'>>();
      else assert<Equals<typeof s, 'd' | undefined>>();
    };
    expect(L.has(map, 'b')).toBe(true);
    expect(L.has(map, 'e')).toBe(false);

    const tuple = ['a', 'b', 'c'] as const;
    (s: 'b' | 'c' | 'd' | undefined) => {
      if (L.has(tuple, s)) assert<Equals<typeof s, 'b' | 'c'>>();
      else assert<Equals<typeof s, 'd' | undefined>>();
    };
    expect(L.has(tuple, 'a')).toBe(true);
    expect(L.has(tuple, 'f')).toBe(false);
  });
});

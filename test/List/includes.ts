import { assert, Equals, L } from '../../src/index.js';

const enums = ['a', 'b', 'c'] as const;

export const f1 = (s: 'b' | 'c' | 'd' | undefined) => {
  if (L.includes(enums, s)) assert<Equals<typeof s, 'b' | 'c'>>();
  else assert<Equals<typeof s, 'd' | undefined>>();
};

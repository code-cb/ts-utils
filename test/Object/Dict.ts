import { O } from '../../src/index.js';

export const d1: O.Dict<number> = { a: 1, b: 2 };

// @ts-expect-error: Type 'string' is not assignable to type 'number'
export const d2: O.Dict<number> = { a: '1' };

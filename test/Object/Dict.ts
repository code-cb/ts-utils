import * as O from '../../src/object/index.js';

export const d1: O.Dict<number> = { a: 1, b: 2 };

// @ts-expect-error
export const d2: O.Dict<number> = { a: '1' };

export const d3: O.Dict = { a: '1', b: '2' };

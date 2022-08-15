import * as O from '../../src/object/index.js';

export const jv1: O.JsonValue = {
  a: 1,
  b: '2',
  c: true,
};

// @ts-expect-error: Type '() => void' is not assignable to type 'JsonValue | undefined'
export const jv2: O.JsonValue = {
  a: () => {},
};

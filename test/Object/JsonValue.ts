import * as O from '../../src/object';

export const jv1: O.JsonValue = {
  a: 1,
  b: '2',
  c: true,
};

// @ts-expect-error
export const jv2: O.JsonValue = {
  a: () => {},
};

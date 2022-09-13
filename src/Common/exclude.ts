/**
 * References
 * - https://github.com/garronej/tsafe/blob/9efe517e44a4551ca95106b0049559737bcb9229/src/exclude.ts
 */

import { Primitive } from './Primitive';

export const exclude =
  <Excluded extends Primitive>(...excluded: ReadonlyArray<Excluded>) =>
  <Value>(value: Value): value is Exclude<Value, Excluded> =>
    !excluded.includes(value as any);

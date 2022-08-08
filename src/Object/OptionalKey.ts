/**
 * References:
 * - https://github.com/garronej/tsafe/blob/debb125bef/src/PickOptionals.ts
 */

import { Value } from './Value.js';

export type MarkRequiredKeyAsNever<Obj extends object> = {
  [K in keyof Obj]: Obj extends Record<K, Obj[K]> ? never : K;
};

export type OptionalKey<Obj extends object> = Exclude<
  Value<MarkRequiredKeyAsNever<Obj>>,
  undefined
>;

/**
 * References:
 * - https://github.com/garronej/tsafe/blob/debb125bef/src/PickOptionals.ts
 */

import { ObjectValue } from './ObjectValue.js';

export type MarkRequiredKeyAsNever<Obj extends object> = {
  [K in keyof Obj]: Obj extends Record<K, Obj[K]> ? never : K;
};

export type OptionalKey<Obj extends object> = Exclude<
  ObjectValue<MarkRequiredKeyAsNever<Obj>>,
  undefined
>;

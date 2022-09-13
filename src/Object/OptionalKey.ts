/**
 * References:
 * - https://github.com/garronej/tsafe/blob/debb125bef/src/PickOptionals.ts
 * - https://github.com/sindresorhus/type-fest/blob/f0b1c3faf6f4dcf7a6a71d4fa43c06d543c60df3/source/optional-keys-of.d.ts
 * - https://github.com/sindresorhus/type-fest/blob/f0b1c3faf6f4dcf7a6a71d4fa43c06d543c60df3/source/required-keys-of.d.ts
 * - https://github.com/ts-essentials/ts-essentials/blob/c63e30e6112ed93df0bcf05028cfe1d67617f93d/lib/types.ts#L227
 *
 * - https://github.com/sindresorhus/type-fest/blob/f0b1c3faf6f4dcf7a6a71d4fa43c06d543c60df3/source/has-optional-keys.d.ts
 */

import { Value } from './Value';

export type MarkRequiredKeyAsNever<Obj extends object> = {
  [K in keyof Obj]: Obj extends Record<K, Obj[K]> ? never : K;
};

export type OptionalKey<Obj extends object> = Exclude<
  Value<MarkRequiredKeyAsNever<Obj>>,
  undefined
>;

export type HasOptionalKey<Obj extends object> = OptionalKey<Obj> extends never
  ? false
  : true;

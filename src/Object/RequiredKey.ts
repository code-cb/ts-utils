/**
 * References:
 * - https://github.com/garronej/tsafe/blob/debb125bef/src/PickOptionals.ts
 * - https://github.com/sindresorhus/type-fest/blob/f0b1c3faf6f4dcf7a6a71d4fa43c06d543c60df3/source/optional-keys-of.d.ts
 * - https://github.com/sindresorhus/type-fest/blob/f0b1c3faf6f4dcf7a6a71d4fa43c06d543c60df3/source/required-keys-of.d.ts
 * - https://github.com/ts-essentials/ts-essentials/blob/c63e30e6112ed93df0bcf05028cfe1d67617f93d/lib/types.ts#L234
 * 
 * - https://github.com/sindresorhus/type-fest/blob/f0b1c3faf6f4dcf7a6a71d4fa43c06d543c60df3/source/has-required-keys.d.ts
 */

import { Value } from './Value.js';
import { MarkRequiredKeyAsNever } from './OptionalKey.js';

export type RequiredKey<Obj extends object> = Exclude<
  keyof Obj,
  Value<MarkRequiredKeyAsNever<Obj>>
>;

export type HasRequiredKey<Obj extends object> = RequiredKey<Obj> extends never
  ? false
  : true;

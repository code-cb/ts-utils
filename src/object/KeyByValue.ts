/**
 * References:
 * - https://github.com/ts-essentials/ts-essentials/blob/c63e30e6112ed93df0bcf05028cfe1d67617f93d/lib/types.ts#L218
 * - - https://github.com/ts-essentials/ts-essentials/blob/c63e30e6112ed93df0bcf05028cfe1d67617f93d/lib/types.ts#L221
 * - https://github.com/ts-essentials/ts-essentials/blob/c63e30e6112ed93df0bcf05028cfe1d67617f93d/lib/types.ts#L224
 */

import { IsAny } from '../common';
import { Value } from './Value';

export type KeyByValue<
  Obj extends object,
  Val,
  AllowAny extends boolean = false,
> = Value<{
  [K in keyof Obj]-?: {
    false: IsAny<Obj[K]> extends true ? never : Obj[K] extends Val ? K : never;
    true: Obj[K] extends Val ? K : never;
  }[`${AllowAny}`];
}>;

export type OmitByValue<
  Obj extends object,
  Value,
  AllowAny extends boolean = false,
> = Omit<Obj, KeyByValue<Obj, Value, AllowAny>>;

export type PickByValue<
  Obj extends object,
  Value,
  AllowAny extends boolean = false,
> = Pick<Obj, KeyByValue<Obj, Value, AllowAny>>;

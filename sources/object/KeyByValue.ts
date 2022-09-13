/**
 * References
 * - https://github.com/ts-essentials/ts-essentials/blob/c63e30e6112ed93df0bcf05028cfe1d67617f93d/lib/types.ts#L218
 */

import { Value } from './Value';

export type KeyByValue<Obj extends object, Val> = Value<{
  [K in keyof Obj]-?: Obj[K] extends Val ? K : never;
}>;

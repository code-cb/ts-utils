/**
 * References:
 * - https://github.com/ts-essentials/ts-essentials/blob/c63e30e6112ed93df0bcf05028cfe1d67617f93d/lib/types.ts#L224
 */

import { KeyByValue } from './KeyByValue.js';

export type PickByValue<Obj extends object, Value> = Pick<
  Obj,
  KeyByValue<Obj, Value>
>;

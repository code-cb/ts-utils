/**
 * References:
 * - https://github.com/ts-essentials/ts-essentials/blob/c63e30e6112ed93df0bcf05028cfe1d67617f93d/lib/types.ts#L221
 */

import { KeyByValue } from './KeyByValue.js';

export type OmitByValue<Obj extends object, Value> = Omit<
  Obj,
  KeyByValue<Obj, Value>
>;

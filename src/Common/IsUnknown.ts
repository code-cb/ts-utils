/**
 * References:
 * - https://github.com/ts-essentials/ts-essentials/blob/c63e30e6112ed93df0bcf05028cfe1d67617f93d/lib/types.ts#L11
 */

import { IsAny } from './IsAny';

export type IsUnknown<Value> = IsAny<Value> extends true
  ? false
  : unknown extends Value
  ? true
  : false;

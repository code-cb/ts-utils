/**
 * References:
 * - https://github.com/ts-essentials/ts-essentials/blob/c63e30e6112ed93df0bcf05028cfe1d67617f93d/lib/types.ts#L5
 */

import { Primitive } from './Primitive';

export type Builtin = Primitive | Function | Date | Error | RegExp;

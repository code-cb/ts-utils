/**
 * References:
 * - https://github.com/ts-essentials/ts-essentials/blob/c63e30e6112ed93df0bcf05028cfe1d67617f93d/lib/types.ts#L412
 */

import { Writable } from './Writable';

export type MarkWritable<Obj extends object, Prop extends keyof Obj> = Omit<
  Obj,
  Prop
> &
  Writable<Pick<Obj, Prop>>;

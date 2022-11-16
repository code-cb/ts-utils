/**
 * References:
 * - https://github.com/ts-essentials/ts-essentials/blob/c63e30e6112ed93df0bcf05028cfe1d67617f93d/lib/types.ts#L403
 */

import { NonOptional } from '../common';

type Required<Obj extends object, MarkNonOptional extends boolean> = {
  [K in keyof Obj]-?: {
    false: Obj[K];
    true: NonOptional<Obj[K]>;
  }[`${MarkNonOptional}`];
};

export type MarkRequired<
  Obj extends object,
  Prop extends keyof Obj,
  MarkNonOptional extends boolean = true,
> = Omit<Obj, Prop> & Required<Pick<Obj, Prop>, MarkNonOptional>;


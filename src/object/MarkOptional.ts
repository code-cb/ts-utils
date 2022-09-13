/**
 * References:
 * - https://github.com/ts-essentials/ts-essentials/blob/c63e30e6112ed93df0bcf05028cfe1d67617f93d/lib/types.ts#L406
 */

export type MarkOptional<Obj extends object, Prop extends keyof Obj> = Omit<
  Obj,
  Prop
> &
  Partial<Pick<Obj, Prop>>;

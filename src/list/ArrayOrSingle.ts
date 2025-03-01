/**
 * References:
 * - https://github.com/ts-essentials/ts-essentials/blob/c63e30e6112ed93df0bcf05028cfe1d67617f93d/lib/types.ts#L14
 */

export type ArrayOrSingle<Value> = Value | Value[];

export type ReadonlyArrayOrSingle<Value> = Value | readonly Value[];

export type ElementOrSingle<ArrOrSingle extends ReadonlyArrayOrSingle<any>> =
  ArrOrSingle extends readonly (infer Element)[] ? Element : ArrOrSingle;

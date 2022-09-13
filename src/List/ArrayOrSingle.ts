/**
 * References:
 * - https://github.com/ts-essentials/ts-essentials/blob/c63e30e6112ed93df0bcf05028cfe1d67617f93d/lib/types.ts#L14
 */

export type ArrayOrSingle<Value> = Value | Array<Value>;

export type ReadonlyArrayOrSingle<Value> = Value | ReadonlyArray<Value>;

export type ElementOrSingle<ArrOrSingle extends ReadonlyArrayOrSingle<any>> =
  ArrOrSingle extends ReadonlyArray<infer Element> ? Element : ArrOrSingle;

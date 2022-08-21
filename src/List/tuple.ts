/**
 * References:
 * - https://github.com/ts-essentials/ts-essentials/blob/c63e30e6112ed93df0bcf05028cfe1d67617f93d/lib/types.ts#L6
 */

export const tuple = <Args extends any[]>(...args: Args) => args;

export type IsTuple<List extends ReadonlyArray<any>> =
  List extends ReadonlyArray<any> ? (any[] extends List ? false : true) : false;

export type Tuple<List extends ReadonlyArray<any>> =
  List extends ReadonlyArray<any> ? (any[] extends List ? never : List) : never;

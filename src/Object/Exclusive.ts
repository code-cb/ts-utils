/**
 * References:
 * - https://github.com/ts-essentials/ts-essentials/blob/c63e30e6112ed93df0bcf05028cfe1d67617f93d/lib/types.ts#L475
 * - https://effectivetypescript.com/2021/11/11/optional-never/
 */

type ExcludeFrom<A, B> = A & { [K in Exclude<keyof B, keyof A>]?: never };

export type Exclusive<A extends object, B extends object> =
  | ExcludeFrom<A, B>
  | ExcludeFrom<B, A>;

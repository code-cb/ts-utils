/**
 * References:
 * - https://github.com/ts-essentials/ts-essentials/blob/c63e30e6112ed93df0bcf05028cfe1d67617f93d/lib/types.ts#L430
 */

export type Element<
  List extends Iterable<any> | AsyncIterable<any> | ArrayLike<any>,
> = List extends
  | Iterable<infer Element>
  | AsyncIterable<infer Element>
  | ArrayLike<infer Element>
  ? Element
  : never;

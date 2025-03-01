/**
 * References:
 * - https://github.com/type-challenges/type-challenges/issues/15345
 * - https://github.com/type-challenges/type-challenges/issues/14199
 */

import { AnyRecord } from './AnyRecord';

type Merge<
  Target extends AnyRecord,
  Source extends AnyRecord,
> = Target extends any
  ? {
      [Key in keyof Target | keyof Source]: Key extends keyof Source
        ? Source[Key]
        : Key extends keyof Target
          ? Target[Key]
          : never;
    }
  : never;

export type Assign<
  Target extends AnyRecord,
  Sources extends readonly AnyRecord[],
> = Sources extends readonly [
  infer First extends AnyRecord,
  ...infer Tail extends readonly AnyRecord[],
]
  ? Assign<Merge<Target, First>, Tail>
  : Target;

export const assign = <
  Target extends AnyRecord,
  Sources extends readonly AnyRecord[],
>(
  target: Target,
  ...sources: Sources
) => Object.assign(target, ...sources) as Assign<Target, Sources>;

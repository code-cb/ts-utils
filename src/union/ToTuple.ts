/**
 * References:
 * - https://github.com/type-challenges/type-challenges/issues/13928
 * - https://github.com/type-challenges/type-challenges/issues/15869
 */

import { PickOne } from './PickOne';

type ToTupleImpl<
  Union,
  Result extends any[] = [],
  SomeValue = PickOne<Union>,
> = [SomeValue] extends [never]
  ? Result
  : ToTupleImpl<Exclude<Union, SomeValue>, [SomeValue, ...Result]>;

export type ToTuple<Union> = ToTupleImpl<Union>;

type ToTupleUnionImpl<
  Union extends PropertyKey,
  Result extends PropertyKey[] = [],
> = [Union] extends [never]
  ? Result
  : {
      [K in Union]: ToTupleUnionImpl<Exclude<Union, K>, [...Result, K]>;
    }[Union];

export type ToTupleUnion<Union extends PropertyKey> = ToTupleUnionImpl<Union>;

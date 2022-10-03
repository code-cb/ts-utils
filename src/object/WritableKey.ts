/**
 * References:
 * - https://github.com/millsp/ts-toolbelt/blob/master/sources/Object/WritableKeys.ts
 * - https://github.com/type-challenges/type-challenges/issues/15999
 */

import { Equals } from '../common';
import { Value } from './Value';

export type WritableKey<Obj extends object> = Value<{
  [Key in keyof Obj]-?: Equals<
    { -readonly [K in Key]: Obj[K] },
    { [K in Key]: Obj[K] }
  > extends true
    ? Key
    : never;
}>;

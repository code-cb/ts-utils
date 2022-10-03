/**
 * References:
 * - https://github.com/millsp/ts-toolbelt/blob/7d6c44df57c5024d565041e33894660d868a2d86/sources/Object/ReadonlyKeys.ts
 * - https://github.com/type-challenges/type-challenges/issues/15691
 * - https://github.com/type-challenges/type-challenges/issues/12165
 */

import { Equals } from '../common';
import { Value } from './Value';

export type ReadonlyKey<Obj extends object> = Value<{
  [Key in keyof Obj]-?: Equals<
    { readonly [K in Key]: Obj[K] },
    { [K in Key]: Obj[K] }
  > extends true
    ? Key
    : never;
}>;

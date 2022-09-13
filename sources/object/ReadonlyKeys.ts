/**
 * References:
 * - https://github.com/millsp/ts-toolbelt/blob/7d6c44df57c5024d565041e33894660d868a2d86/sources/Object/ReadonlyKeys.ts
 * - https://github.com/type-challenges/type-challenges/issues/15691
 * - https://github.com/type-challenges/type-challenges/issues/12165
 */

import { Equals } from '../common/Equals';
import { Value } from './Value';

export type ReadonlyKeys<Obj extends object> = Value<{
  [K in keyof Obj]-?: Equals<
    { readonly [P in K]: Obj[P] },
    { [P in K]: Obj[P] }
  > extends true
    ? K
    : never;
}>;

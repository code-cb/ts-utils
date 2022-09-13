/**
 * References:
 * - https://github.com/millsp/ts-toolbelt/blob/7d6c44df57c5024d565041e33894660d868a2d86/sources/Community/IsLiteral.ts
 */

import { Numeric } from './Numeric';

export type IsLiteral<Num extends Numeric> = number extends Num
  ? false
  : bigint extends Num
  ? false
  : true;

export type Literal<Num extends Numeric> = number extends Num
  ? never
  : bigint extends Num
  ? never
  : Num;

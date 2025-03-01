/**
 * References:
 * - https://github.com/millsp/ts-toolbelt/blob/7d6c44df57c5024d565041e33894660d868a2d86/sources/Number/Range.ts
 */

import {
  Iteration,
  IterationOf,
  Next,
  Prev,
  Value,
} from '../iteration/Iteration';

type RangeForward<
  From extends Iteration,
  To extends Iteration,
  List extends readonly number[] = [],
> = From extends To
  ? List
  : RangeForward<Next<From>, To, [...List, Value<From>]>;

type RangeBackward<
  From extends Iteration,
  To extends Iteration,
  List extends readonly number[] = [],
> = From extends To
  ? List
  : RangeBackward<Prev<From>, To, [...List, Value<From>]>;

type Direction = 'backward' | 'forward';

export type RangeImpl<
  From extends Iteration,
  To extends Iteration,
  Dir extends Direction,
> = {
  backward: RangeBackward<From, To>;
  forward: RangeForward<From, To>;
}[Dir];

export type Range<
  From extends number,
  To extends number,
  Dir extends Direction = 'forward',
> = RangeImpl<IterationOf<From>, IterationOf<To>, Dir>;

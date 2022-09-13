import { assert, Equals } from 'common';
import * as I from 'iteration';
import * as N from 'number';

export namespace Main {
  assert<Equals<N.Range<-2, 3, 'forward'>, [-2, -1, 0, 1, 2]>>();
  assert<Equals<N.Range<23, 23, 'forward'>, []>>();
  assert<Equals<N.Range<3, -2, 'backward'>, [3, 2, 1, 0, -1]>>();
  assert<Equals<N.Range<-78, -78, 'backward'>, []>>();
}

/**
 * Alternative implementations or `RangeXxx` types
 */
export namespace A1 {
  type RangeForwardImpl<
    From extends I.Iteration,
    To extends I.Iteration,
  > = From extends To
    ? []
    : [I.Value<From>, ...RangeForwardImpl<I.Next<From>, To>];

  type RangeForward<From extends number, To extends number> = RangeForwardImpl<
    I.IterationOf<From>,
    I.IterationOf<To>
  >;

  assert<Equals<RangeForward<-2, 3>, [-2, -1, 0, 1, 2]>>();
  assert<Equals<RangeForward<23, 23>, []>>();

  type RangeBackwardImpl<
    From extends I.Iteration,
    To extends I.Iteration,
  > = From extends To
    ? []
    : [I.Value<From>, ...RangeBackwardImpl<I.Prev<From>, To>];

  type RangeBackward<
    From extends number,
    To extends number,
  > = RangeBackwardImpl<I.IterationOf<From>, I.IterationOf<To>>;

  assert<Equals<RangeBackward<3, -2>, [3, 2, 1, 0, -1]>>();
  assert<Equals<RangeBackward<-78, -78>, []>>();
}

import { assert, Equals, Id } from 'common';
import * as I from 'iteration';

type IterationOf10 = I.IterationOf<10>;

assert<
  Equals<
    IterationOf10,
    Id<
      I.Iteration,
      { next: '11'; oppo: '-10'; prev: '9'; sign: '+'; value: 10 }
    >
  >
>();
assert<Equals<I.Next<IterationOf10>, I.IterationOf<11>>>();
assert<Equals<I.Prev<IterationOf10>, I.IterationOf<9>>>();
assert<Equals<I.Value<IterationOf10>, 10>>();
assert<Equals<I.Oppo<IterationOf10>, I.IterationOf<-10>>>();

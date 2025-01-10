import { assert, Equals, ExcludeSuper } from 'common';
import * as U from 'union';

describe(`ExcludeSuper`, () => {
  it(`works`, () => {
    type Format = 'cjs' | 'ejs';

    type ExpFormat1 = U.Expandable<string, Format>;
    type F1 = ExcludeSuper<ExpFormat1, string>;
    assert<Equals<F1, Format>>();

    type ExpFormat2 = Format | (string & {});
    type F2 = ExcludeSuper<ExpFormat2, string>;
    assert<Equals<F2, Format>>();

    type Status = 200 | 400;

    type ExpStatus1 = U.Expandable<number, Status>;
    type S1 = ExcludeSuper<ExpStatus1, number>;
    assert<Equals<S1, Status>>();

    type ExpStatus2 = Status | (number & {});
    type S2 = ExcludeSuper<ExpStatus2, number>;
    assert<Equals<S2, Status>>();
  });
});

import * as B from 'boolean';
import { assert, Assignable, Equals } from 'common';
import { noop } from 'function';
import * as U from 'union';

describe(`U.Expandable`, () => {
  it(`works`, () => {
    type Format = 'cjs' | 'ejs';

    type ExpFormat1 = U.Expandable<string, Format>;
    assert<B.Not<Equals<ExpFormat1, Format>>>();
    assert<Assignable<Format, ExpFormat1>>();
    assert<B.Not<Assignable<ExpFormat1, Format>>>();
    assert<B.Not<Equals<ExpFormat1, string>>>();
    assert<Assignable<string, ExpFormat1>>();
    assert<B.Not<Assignable<ExpFormat1, string>>>();
    const ff1 = (f: ExpFormat1) => noop(f);
    ff1('cjs'), ff1('ejs'), ff1('system');
    // @ts-expect-error
    ff1({});

    type ExpFormat2 = Format | (string & {});
    assert<B.Not<Equals<ExpFormat2, Format>>>();
    assert<Assignable<Format, ExpFormat2>>();
    assert<B.Not<Assignable<ExpFormat2, Format>>>();
    assert<B.Not<Equals<ExpFormat2, string>>>();
    assert<Assignable<string, ExpFormat2>>();
    assert<Assignable<ExpFormat2, string>>(); // Behaves differently with above
    const ff2 = (f: ExpFormat2) => noop(f);
    ff2('cjs'), ff2('ejs'), ff2('system');
    // @ts-expect-error
    ff2({});

    type Status = 200 | 400;

    type ExpStatus1 = U.Expandable<number, Status>;
    assert<B.Not<Equals<ExpStatus1, Status>>>();
    assert<Assignable<Status, ExpStatus1>>();
    assert<B.Not<Assignable<ExpStatus1, Status>>>();
    assert<B.Not<Equals<ExpStatus1, number>>>();
    assert<Assignable<number, ExpStatus1>>();
    assert<B.Not<Assignable<ExpStatus1, number>>>();
    const fs1 = (s: ExpStatus1) => noop(s);
    fs1(200), fs1(400), fs1(500);
    // @ts-expect-error
    fs1({});

    type ExpStatus2 = Status | (number & {});
    assert<B.Not<Equals<ExpStatus2, Status>>>();
    assert<Assignable<Status, ExpStatus2>>();
    assert<B.Not<Assignable<ExpStatus2, Status>>>();
    assert<B.Not<Equals<ExpStatus2, number>>>();
    assert<Assignable<number, ExpStatus2>>();
    assert<Assignable<ExpStatus2, number>>(); // Behaves differently with above
    const fs2 = (s: ExpStatus2) => noop(s);
    fs2(200), fs2(400), fs2(500);
    // @ts-expect-error
    fs2({});
  });
});

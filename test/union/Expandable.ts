import * as B from 'boolean';
import { assert, Equals } from 'common';
import { noop } from 'function';
import * as U from 'union';

describe(`U.Expandable`, () => {
  it(`works`, () => {
    type Format = 'cjs' | 'ejs';

    type ExpFormat1 = U.Expandable<string, Format>;
    assert<B.Not<Equals<ExpFormat1, string>>>();
    const ff1 = (f: ExpFormat1) => noop(f);
    ff1('cjs'), ff1('ejs'), ff1('system');
    // @ts-expect-error
    ff1({});

    type ExpFormat2 = Format | (string & {});
    assert<B.Not<Equals<ExpFormat2, string>>>();
    const ff2 = (f: ExpFormat2) => noop(f);
    ff2('cjs'), ff2('ejs'), ff2('system');
    // @ts-expect-error
    ff2({});

    type Status = 200 | 400;
    type ExpStatus1 = U.Expandable<number, Status>;
    assert<B.Not<Equals<ExpStatus1, number>>>();
    const fs1 = (s: ExpStatus1) => noop(s);
    fs1(200), fs1(400), fs1(500);
    // @ts-expect-error
    fs1({});

    type ExpStatus2 = Status | (number & {});
    assert<B.Not<Equals<ExpStatus2, number>>>();
    const fs2 = (s: ExpStatus2) => noop(s);
    fs2(200), fs2(400), fs2(500);
    // @ts-expect-error
    fs2({});

    type Result = { data: number } | { error: Error };

    type ExpResult1 = U.Expandable<Record<string, any>, Result>;
    assert<B.Not<Equals<ExpResult1, Record<string, any>>>>();
    const fr1 = (r: ExpResult1) => noop(r);
    fr1({ data: 1000 });
    fr1({ error: new Error('oops') });
    fr1({ message: 'OK', status: 200 });

    type ExpResult2 = Result | Record<string, any>;
    assert<B.Not<Equals<ExpResult2, Record<string, any>>>>();
    const fr2 = (r: ExpResult2) => noop(r);
    fr2({ data: 1000 });
    fr2({ error: new Error('oops') });
    fr2({ massage: 'OK', status: 200 });
  });
});

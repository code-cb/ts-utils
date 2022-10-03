import { noop } from 'function';
import * as U from 'union';

describe(`U.Expandable`, () => {
  it(`works`, () => {
    type Format = 'cjs' | 'ejs';
    const ff = (f: U.Expandable<string, Format>) => noop(f);
    ff('cjs');
    ff('ejs');
    ff('system');

    type Status = 200 | 400;
    const fs = (s: U.Expandable<number, Status>) => noop(s);
    fs(200);
    fs(400);
    fs(500);

    type Result = { data: number } | { error: Error };
    const fr = (r: U.Expandable<Record<string, any>, Result>) => noop(r);
    fr({ data: 1000 });
    fr({ error: new Error('oops') });
    fr({ message: 'OK', status: 200 });
  });
});

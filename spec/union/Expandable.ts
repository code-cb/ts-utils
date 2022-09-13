import * as U from '../../sources/union';

type Format = 'cjs' | 'ejs';
declare const ff: (f: U.Expandable<string, Format>) => void;
ff('cjs');
ff('ejs');
ff('system');

type Status = 200 | 400;
declare const fs: (s: U.Expandable<number, Status>) => void;
fs(200);
fs(400);
fs(500);

type Result = { data: number } | { error: Error };
declare const fr: (r: U.Expandable<Record<string, any>, Result>) => void;
fr({ data: 1000 });
fr({ error: new Error('oops') });
fr({ message: 'OK', status: 200 });

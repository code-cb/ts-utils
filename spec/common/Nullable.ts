import { asNullable, assert, Equals, Nullable } from '../../sources/common';

assert<Equals<Nullable<string>, string | null>>();

declare const getDate: () => Date;

const d = asNullable(getDate());
assert<Equals<typeof d, Date | null>>();

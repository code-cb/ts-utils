import { asNullable, assert, Equals, Nullable } from '../../src/common';

assert<Equals<Nullable<string>, string | null>>();

declare const getDate: () => Date;

const d = asNullable(getDate());
assert<Equals<typeof d, Date | null>>();

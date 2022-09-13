import { asMaybe, assert, Equals, Maybe } from '../../sources/common';

assert<Equals<Maybe<string>, string | undefined | null>>();

declare const getDate: () => Date;

const d = asMaybe(getDate());
assert<Equals<typeof d, Date | undefined | null>>();

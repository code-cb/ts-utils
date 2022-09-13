import { assert, Equals, symToStr } from 'common';

const doSth = () => {};
const fn = symToStr({ doSth });
assert<Equals<typeof fn, 'doSth'>>();
assert(fn === 'doSth');

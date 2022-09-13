import { assert, Equals, symToStr } from '../../src/common';

const doSth = () => {};
const fn = symToStr({ doSth });
assert<Equals<typeof fn, 'doSth'>>();
assert(fn === 'doSth');

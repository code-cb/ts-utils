import { assert, Equals, symToStr } from '../../sources/common';

const doSth = () => {};
const fn = symToStr({ doSth });
assert<Equals<typeof fn, 'doSth'>>();
assert(fn === 'doSth');

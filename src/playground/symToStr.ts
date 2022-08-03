import { assert, Equals, symToStr } from '../index.js';

const doSth = () => {};
const fn = symToStr({ doSth });
assert<Equals<typeof fn, 'doSth'>>();
assert(fn === 'doSth');

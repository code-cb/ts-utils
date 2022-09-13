import { assert, isPromiseLike } from '../../sources/common';

const p1 = Promise.resolve(1);
assert(isPromiseLike(p1));

const p2 = {
  value: 1,
  then(cb: (value: number) => void) {
    cb(this.value);
  },
};
assert(isPromiseLike(p2));

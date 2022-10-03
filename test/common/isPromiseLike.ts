import { assert, Equals, isPromiseLike } from 'common';
import * as F from 'function';

describe(`isPromiseLike`, () => {
  it(`works`, () => {
    let p1: unknown;
    p1 = Promise.resolve(1);
    assert(isPromiseLike(p1));
    expect(isPromiseLike(p1)).toBe(true);
    assert<Equals<typeof p1, PromiseLike<any>>>();
    p1.then(F.noop, F.noop);

    let p2: unknown;
    const p3 = {
      value: 1,
      then(cb: (value: number) => void) {
        cb(this.value);
      },
    };
    p2 = p3;
    assert(isPromiseLike(p2));
    expect(isPromiseLike(p2)).toBe(true);
    assert<Equals<typeof p2, PromiseLike<any>>>();
    p2.then(F.noop, F.noop);
  });
});

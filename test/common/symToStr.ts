import { assert, Equals, symToStr } from 'common';

describe(`symToStr`, () => {
  it(`works`, () => {
    const doSth = () => {};
    const fn = symToStr({ doSth });
    assert<Equals<typeof fn, 'doSth'>>();
    assert(fn === 'doSth');
    expect(fn).toBe('doSth');
  });
});

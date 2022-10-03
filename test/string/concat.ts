import { assert, Equals } from 'common';
import * as S from 'string';

describe(`S.Concat and S.concat`, () => {
  it(`works`, () => {
    assert<Equals<S.Concat<[]>, ''>>();
    const c1 = S.concat();
    assert<Equals<typeof c1, ''>>();
    expect(c1).toBe('');

    assert<Equals<S.Concat<['aaa']>, 'aaa'>>();
    const c2 = S.concat('aaa');
    assert<Equals<typeof c2, 'aaa'>>();
    expect(c2).toBe('aaa');

    assert<
      Equals<S.Concat<['aaa', 111, 222n, true, false]>, 'aaa111222truefalse'>
    >();
    const c3 = S.concat('aaa', 111, 222n, true, false);
    assert<Equals<typeof c3, 'aaa111222truefalse'>>();
    expect(c3).toBe('aaa111222truefalse');

    assert<Equals<S.Concat<S.TemplatePart[]>, string>>();
    const c4 = S.concat(...['a', 1, false, true]);
    assert<Equals<typeof c4, string>>();
    expect(c4).toBe('a1falsetrue');
  });
});

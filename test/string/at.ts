import { assert, Equals } from 'common';
import * as S from 'string';

describe(`S.At and S.at`, () => {
  it(`works`, () => {
    assert<Equals<S.At<'', 0>, undefined>>;
    const a0 = S.at('', 0);
    assert<Equals<typeof a0, undefined>>;
    expect(a0).toBe(undefined);

    const str1 = 'abcde';
    type Str1 = typeof str1;

    assert<Equals<S.At<Str1, 0>, 'a'>>;
    const a1 = S.at(str1, 0);
    assert<Equals<typeof a1, 'a'>>;
    expect(a1).toBe('a');

    assert<Equals<S.At<Str1, 2>, 'c'>>;
    const a2 = S.at(str1, 2);
    assert<Equals<typeof a2, 'c'>>;
    expect(a2).toBe('c');

    assert<Equals<S.At<Str1, 4>, 'e'>>;
    const a3 = S.at(str1, 4);
    assert<Equals<typeof a3, 'e'>>;
    expect(a3).toBe('e');

    assert<Equals<S.At<Str1, 6>, undefined>>;
    const a4 = S.at(str1, 6);
    assert<Equals<typeof a4, undefined>>;
    expect(a4).toBe(undefined);

    assert<Equals<S.At<Str1, -1>, 'e'>>;
    const a5 = S.at(str1, -1);
    assert<Equals<typeof a5, 'e'>>;
    expect(a5).toBe('e');

    assert<Equals<S.At<Str1, -4>, 'b'>>;
    const a6 = S.at(str1, -4);
    assert<Equals<typeof a6, 'b'>>;
    expect(a6).toBe('b');

    assert<Equals<S.At<Str1, -7>, undefined>>;
    const a7 = S.at(str1, -7);
    assert<Equals<typeof a7, undefined>>;
    expect(a7).toBe(undefined);

    assert<Equals<S.At<Str1, number>, string | undefined>>;
    const a8 = S.at(str1, Number(5));
    assert<Equals<typeof a8, string | undefined>>;
    expect(a8).toBe(undefined);

    assert<Equals<S.At<string, 1>, string | undefined>>;
    const a9 = S.at(String('abc'), 1);
    assert<Equals<typeof a9, string | undefined>>;
    expect(a9).toBe('b');
  });
});

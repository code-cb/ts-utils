import { assert, Equals } from 'common';
import { tuple } from 'list';
import * as S from 'string';

describe(`S.Join and S.join`, () => {
  it(`works`, () => {
    assert<Equals<S.Join<[], 'aaa'>, ''>>();
    const j1 = S.join([] as const, 'aaa');
    assert<Equals<typeof j1, ''>>();
    expect(j1).toBe('');

    assert<Equals<S.Join<['a', 'b', 'c'], ''>, 'abc'>>();
    const j2 = S.join(['a', 'b', 'c'] as const, '');
    assert<Equals<typeof j2, 'abc'>>();
    expect(j2).toBe('abc');

    assert<Equals<S.Join<[47, 245n, 893], '-'>, '47-245-893'>>();
    const j3 = S.join([47, 245n, 893] as const, '-');
    assert<Equals<typeof j3, '47-245-893'>>();
    expect(j3).toBe('47-245-893');

    assert<
      Equals<S.Join<[true, false, true], ' or '>, 'true or false or true'>
    >();
    const j4 = S.join([true, false, true] as const, ' or ');
    assert<Equals<typeof j4, 'true or false or true'>>();
    expect(j4).toBe('true or false or true');

    assert<Equals<S.Join<number[], '+'>, string>>();
    const j5 = S.join([1, 2, 3, 4], '+');
    assert<Equals<typeof j5, string>>();
    expect(j5).toBe('1+2+3+4');

    assert<Equals<S.Join<['a', 'b', 'c'], string>, `a${string}b${string}c`>>();
    const j6 = S.join(['a', 'b', 'c'] as const, String('.'));
    assert<Equals<typeof j6, `a${string}b${string}c`>>();
    expect(j6).toBe('a.b.c');

    assert<
      Equals<
        S.Join<[string, number, boolean, bigint], '&'>,
        `${string}&${number}&${boolean}&${bigint}`
      >
    >();
    const j7 = S.join(tuple('a', 5, false, 7n), '&');
    assert<Equals<typeof j7, `${string}&${number}&${boolean}&${bigint}`>>();
    expect(j7).toBe('a&5&false&7');
  });
});

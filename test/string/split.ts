import { assert, Equals } from 'common';
import * as S from 'string';

describe(`S.Split and S.split`, () => {
  it(`works`, () => {
    assert<Equals<S.Split<'', ''>, []>>();
    const s1 = S.split('', '');
    assert<Equals<typeof s1, []>>();
    expect(s1).toEqual([]);

    assert<Equals<S.Split<'a', ''>, ['a']>>();
    const s2 = S.split('a', '');
    assert<Equals<typeof s2, ['a']>>();
    expect(s2).toEqual(['a']);

    assert<Equals<S.Split<'abbccc', ''>, ['a', 'b', 'b', 'c', 'c', 'c']>>();
    const s3 = S.split('abbccc', '');
    assert<Equals<typeof s3, ['a', 'b', 'b', 'c', 'c', 'c']>>();
    expect(s3).toEqual(['a', 'b', 'b', 'c', 'c', 'c']);

    assert<Equals<S.Split<'abacad', 'a'>, ['', 'b', 'c', 'd']>>();
    const s4 = S.split('abacad', 'a');
    assert<Equals<typeof s4, ['', 'b', 'c', 'd']>>();
    expect(s4).toEqual(['', 'b', 'c', 'd']);

    assert<Equals<S.Split<'1-22-333-4444', '-'>, ['1', '22', '333', '4444']>>();
    const s5 = S.split('1-22-333-4444', '-');
    assert<Equals<typeof s5, ['1', '22', '333', '4444']>>();
    expect(s5).toEqual(['1', '22', '333', '4444']);

    assert<Equals<S.Split<'a/bb/ccc/dddd', '/'>, ['a', 'bb', 'ccc', 'dddd']>>();
    const s6 = S.split('a/bb/ccc/dddd', '/');
    assert<Equals<typeof s6, ['a', 'bb', 'ccc', 'dddd']>>();
    expect(s6).toEqual(['a', 'bb', 'ccc', 'dddd']);

    assert<Equals<S.Split<string, ''>, string[]>>();
    const s7 = S.split(String('1.2.3.4.5'), '.');
    assert<Equals<typeof s7, string[]>>();
    expect(s7).toEqual(['1', '2', '3', '4', '5']);

    assert<Equals<S.Split<'a@b@c', string>, string[]>>();
    const s8 = S.split('a@b@c', String('@'));
    assert<Equals<typeof s8, string[]>>();
    expect(s8).toEqual(['a', 'b', 'c']);
  });
});

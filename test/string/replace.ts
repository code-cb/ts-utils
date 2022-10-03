import { assert, Equals } from 'common';
import * as S from 'string';

describe(`S.Replace and S.replace`, () => {
  it(`works`, () => {
    assert<Equals<S.Replace<'abacadaea', '', ''>, 'abacadaea'>>();
    const r1 = S.replace('abacadaea', '', '');
    assert<Equals<typeof r1, 'abacadaea'>>();
    expect(r1).toBe('abacadaea');

    assert<Equals<S.Replace<'@b@c@d@e@', '', ''>, '@b@c@d@e@'>>();
    const r2 = S.replace('@b@c@d@e@', '', '');
    assert<Equals<typeof r2, '@b@c@d@e@'>>();
    expect(r2).toBe('@b@c@d@e@');

    assert<Equals<S.Replace<'abacadaea', 'a', ''>, 'bacadaea'>>();
    const r3 = S.replace('abacadaea', 'a', '');
    assert<Equals<typeof r3, 'bacadaea'>>();
    expect(r3).toBe('bacadaea');

    assert<Equals<S.Replace<'abacadaea', 'a', 'aa'>, 'aabacadaea'>>();
    const r4 = S.replace('abacadaea', 'a', 'aa');
    assert<Equals<typeof r4, 'aabacadaea'>>();
    expect(r4).toBe('aabacadaea');

    assert<Equals<S.Replace<'abacadaea', 'a', '.'>, '.bacadaea'>>();
    const r5 = S.replace('abacadaea', 'a', '.');
    assert<Equals<typeof r5, '.bacadaea'>>();
    expect(r5).toBe('.bacadaea');

    assert<Equals<S.Replace<'', '', '.'>, '.'>>();
    const r6 = S.replace('', '', '.');
    assert<Equals<typeof r6, '.'>>();
    expect(r6).toBe('.');

    assert<Equals<S.Replace<'a', '', '.'>, '.a'>>();
    const r7 = S.replace('a', '', '.');
    assert<Equals<typeof r7, '.a'>>();
    expect(r7).toBe('.a');

    assert<Equals<S.Replace<'@', '', '.'>, '.@'>>();
    const r8 = S.replace('@', '', '.');
    assert<Equals<typeof r8, '.@'>>();
    expect(r8).toBe('.@');

    assert<Equals<S.Replace<'abc', '', '.'>, '.abc'>>();
    const r9 = S.replace('abc', '', '.');
    assert<Equals<typeof r9, '.abc'>>();
    expect(r9).toBe('.abc');

    assert<Equals<S.Replace<'@bc', '', '.'>, '.@bc'>>();
    const r10 = S.replace('@bc', '', '.');
    assert<Equals<typeof r10, '.@bc'>>();
    expect(r10).toBe('.@bc');

    assert<
      Equals<
        S.Replace<'Hello $1, Welcome $1 to the club', '$1', 'Peter'>,
        'Hello Peter, Welcome $1 to the club'
      >
    >();
    const r11 = S.replace('Hello $1, Welcome $1 to the club', '$1', 'Peter');
    assert<Equals<typeof r11, 'Hello Peter, Welcome $1 to the club'>>();
    expect(r11).toBe('Hello Peter, Welcome $1 to the club');
  });
});

describe(`S.ReplaceAll and S.replaceAll`, () => {
  it(`works`, () => {
    assert<Equals<S.ReplaceAll<'abacadaea', '', ''>, 'abacadaea'>>();
    const r1 = S.replaceAll('abacadaea', '', '');
    assert<Equals<typeof r1, 'abacadaea'>>();
    expect(r1).toBe('abacadaea');

    assert<Equals<S.ReplaceAll<'@b@c@d@e@', '', ''>, '@b@c@d@e@'>>();
    const r2 = S.replaceAll('@b@c@d@e@', '', '');
    assert<Equals<typeof r2, '@b@c@d@e@'>>();
    expect(r2).toBe('@b@c@d@e@');

    assert<Equals<S.ReplaceAll<'abacadaea', 'a', ''>, 'bcde'>>();
    const r3 = S.replaceAll('abacadaea', 'a', '');
    assert<Equals<typeof r3, 'bcde'>>();
    expect(r3).toBe('bcde');

    assert<Equals<S.ReplaceAll<'abacadaea', 'a', '.'>, '.b.c.d.e.'>>();
    const r4 = S.replaceAll('abacadaea', 'a', '.');
    assert<Equals<typeof r4, '.b.c.d.e.'>>();
    expect(r4).toBe('.b.c.d.e.');

    assert<Equals<S.ReplaceAll<'abacadaea', 'a', 'aa'>, 'aabaacaadaaeaa'>>();
    const r5 = S.replaceAll('abacadaea', 'a', 'aa');
    assert<Equals<typeof r5, 'aabaacaadaaeaa'>>();
    expect(r5).toBe('aabaacaadaaeaa');

    assert<Equals<S.ReplaceAll<'', '', '.'>, '.'>>();
    const r6 = S.replaceAll('', '', '.');
    assert<Equals<typeof r6, '.'>>();
    expect(r6).toBe('.');

    assert<Equals<S.ReplaceAll<'a', '', '.'>, '.a.'>>();
    const r7 = S.replaceAll('a', '', '.');
    assert<Equals<typeof r7, '.a.'>>();
    expect(r7).toBe('.a.');

    assert<Equals<S.ReplaceAll<'@', '', '.'>, '.@.'>>();
    const r8 = S.replaceAll('@', '', '.');
    assert<Equals<typeof r8, '.@.'>>();
    expect(r8).toBe('.@.');

    assert<Equals<S.ReplaceAll<'abc', '', '.'>, '.a.b.c.'>>();
    const r9 = S.replaceAll('abc', '', '.');
    assert<Equals<typeof r9, '.a.b.c.'>>();
    expect(r9).toBe('.a.b.c.');

    assert<Equals<S.ReplaceAll<'@bc', '', '.'>, '.@.b.c.'>>();
    const r10 = S.replaceAll('@bc', '', '.');
    assert<Equals<typeof r10, '.@.b.c.'>>();
    expect(r10).toBe('.@.b.c.');

    assert<
      Equals<
        S.ReplaceAll<'Hello $1, Welcome $1 to the club', '$1', 'Peter'>,
        'Hello Peter, Welcome Peter to the club'
      >
    >();
    const r11 = S.replaceAll('Hello $1, Welcome $1 to the club', '$1', 'Peter');
    assert<Equals<typeof r11, 'Hello Peter, Welcome Peter to the club'>>();
    expect(r11).toBe('Hello Peter, Welcome Peter to the club');
  });
});

import { assert, Equals } from 'common';
import * as S from 'string';

describe(`S.Reverse and S.reverse`, () => {
  it(`works`, () => {
    assert<Equals<S.Reverse<''>, ''>>();
    const r1 = S.reverse('');
    assert<Equals<typeof r1, ''>>();
    expect(r1).toBe('');

    assert<Equals<S.Reverse<'a'>, 'a'>>();
    const r2 = S.reverse('a');
    assert<Equals<typeof r2, 'a'>>();
    expect(r2).toBe('a');

    assert<Equals<S.Reverse<'abbccc'>, 'cccbba'>>();
    const r3 = S.reverse('abbccc');
    assert<Equals<typeof r3, 'cccbba'>>();
    expect(r3).toBe('cccbba');

    assert<Equals<S.Reverse<string>, string>>();
    const r4 = S.reverse(String('54321'));
    assert<Equals<typeof r4, string>>();
    expect(r4).toBe('12345');
  });
});

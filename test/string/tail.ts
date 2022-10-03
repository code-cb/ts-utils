import { assert, Equals } from 'common';
import * as S from 'string';

describe(`S.Tail and S.tail`, () => {
  it(`works`, () => {
    assert<Equals<S.Tail<''>, ''>>();
    const t1 = S.tail('');
    assert<Equals<typeof t1, ''>>();
    expect(t1).toBe('');

    assert<Equals<S.Tail<'1'>, ''>>();
    const t2 = S.tail('1');
    assert<Equals<typeof t2, ''>>();
    expect(t2).toBe('');

    assert<Equals<S.Tail<'12345'>, '2345'>>();
    const t3 = S.tail('12345');
    assert<Equals<typeof t3, '2345'>>();
    expect(t3).toBe('2345');

    assert<Equals<S.Tail<string>, string>>();
    const t4 = S.tail(String('abcde'));
    assert<Equals<typeof t4, string>>();
    expect(t4).toBe('bcde');
  });
});

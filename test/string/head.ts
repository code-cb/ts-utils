import { assert, Equals } from 'common';
import * as S from 'string';

describe(`S.Head and S.head`, () => {
  it(`works`, () => {
    assert<Equals<S.Head<''>, ''>>();
    const h1 = S.head('');
    assert<Equals<typeof h1, ''>>();
    expect(h1).toBe('');

    assert<Equals<S.Head<'1'>, ''>>();
    const h2 = S.head('1');
    assert<Equals<typeof h2, ''>>();
    expect(h2).toBe('');

    assert<Equals<S.Head<'12345'>, '1234'>>();
    const h3 = S.head('12345');
    assert<Equals<typeof h3, '1234'>>();
    expect(h3).toBe('1234');

    assert<Equals<S.Head<string>, string>>();
    const h4 = S.head(String('abcde'));
    assert<Equals<typeof h4, string>>();
    expect(h4).toBe('abcd');
  });
});

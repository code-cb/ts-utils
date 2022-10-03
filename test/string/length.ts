import { assert, Equals } from 'common';
import * as S from 'string';

describe(`S.Length and S.length`, () => {
  it(`works`, () => {
    assert<Equals<S.Length<''>, 0>>();
    const l1 = S.length('');
    assert<Equals<typeof l1, 0>>();
    expect(l1).toBe(0);

    assert<Equals<S.Length<'a'>, 1>>();
    const l2 = S.length('a');
    assert<Equals<typeof l2, 1>>();
    expect(l2).toBe(1);

    assert<Equals<S.Length<'abbccc'>, 6>>();
    const l3 = S.length('abbccc');
    assert<Equals<typeof l3, 6>>();
    expect(l3).toBe(6);

    assert<Equals<S.Length<string>, number>>();
    const l4 = S.length(String('12345'));
    assert<Equals<typeof l4, number>>();
    expect(l4).toBe(5);
  });
});

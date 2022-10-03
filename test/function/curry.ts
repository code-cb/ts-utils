import { assert, Equals } from 'common';
import * as F from 'function';

describe(`F.curry`, () => {
  it(`works`, () => {
    const c1 = F.curry((n: number, s: string, b: boolean) => `${n}${s}${b}`);
    const n = 456 as const;
    const s = 'abc' as const;
    const b = false as const;
    const expected = `${n}${s}${b}`;

    const v1 = c1(n)(s)(b);
    assert<Equals<typeof v1, string>>();
    expect(v1).toBe(expected);

    const v2 = c1(456, 'abc')(false);
    assert<Equals<typeof v2, string>>();
    expect(v2).toBe(expected);

    const v3 = c1(456, 'abc', false);
    assert<Equals<typeof v3, string>>();
    expect(v3).toBe(expected);

    const v4 = c1(456)('abc', false);
    assert<Equals<typeof v4, string>>();
    expect(v4).toBe(expected);
  });
});

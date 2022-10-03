import * as B from 'boolean';
import { assert, Equals, IsNever } from 'common';

describe(`B.IsLiteral and B.Literal`, () => {
  it(`works`, () => {
    assert<B.IsLiteral<true>>();
    assert<Equals<B.Literal<true>, true>>();
    assert<B.IsLiteral<false>>();
    assert<Equals<B.Literal<false>, false>>();
    assert<B.Not<B.IsLiteral<boolean>>>();
    assert<IsNever<B.Literal<boolean>>>();
    assert<B.Not<B.IsLiteral<true | false>>>();
    assert<IsNever<B.Literal<true | false>>>();

    // @ts-expect-error
    type I1 = B.IsLiteral<1>;
    // @ts-expect-error
    type L1 = B.Literal<1>;
  });
});

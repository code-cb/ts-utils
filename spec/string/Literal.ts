import * as B from '../../sources/boolean';
import { assert, Equals } from '../../sources/common';
import * as S from '../../sources/string';

enum MyEnum {
  A = 'A',
  B = 'B',
}

type MyType = 'A' | 'B';

interface MyObject {
  a: 'A';
  b: 'B';
}

assert<S.IsLiteral<'42'>>();
assert<Equals<S.Literal<'42'>, '42'>>();

// @ts-expect-error
type I1 = S.IsLiteral<42>;
// @ts-expect-error
type L2 = S.Literal<42>;

assert<S.IsLiteral<MyEnum>>();
assert<Equals<S.Literal<MyEnum>, MyEnum>>();

assert<S.IsLiteral<MyType>>();
assert<Equals<S.Literal<MyType>, 'A' | 'B'>>();

assert<S.IsLiteral<keyof MyObject>>();
assert<Equals<S.Literal<keyof MyObject>, 'a' | 'b'>>();

assert<B.Not<S.IsLiteral<string>>>();
assert<Equals<S.Literal<string>, never>>();
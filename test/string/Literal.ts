import * as B from '../../src/boolean/index.js';
import * as S from '../../src/string/index.js';
import { assert, Equals } from '../../src/common/index.js';

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
assert<B.Not<S.IsLiteral<42>>>();
// @ts-expect-error
assert<Equals<S.Literal<42>, never>>();

assert<S.IsLiteral<MyEnum>>();
assert<Equals<S.Literal<MyEnum>, MyEnum>>();

assert<S.IsLiteral<MyType>>();
assert<Equals<S.Literal<MyType>, 'A' | 'B'>>();

assert<S.IsLiteral<keyof MyObject>>();
assert<Equals<S.Literal<keyof MyObject>, 'a' | 'b'>>();

assert<B.Not<S.IsLiteral<string>>>();
assert<Equals<S.Literal<string>, never>>();

// @ts-expect-error
assert<B.Not<S.IsLiteral<unknown>>>();
// @ts-expect-error
assert<Equals<S.Literal<unknown>, never>>();

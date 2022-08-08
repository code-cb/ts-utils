import { assert, B, S } from '../../src/index.js';

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
assert<B.Not<S.IsLiteral<42>>>();
assert<S.IsLiteral<MyEnum>>();
assert<S.IsLiteral<MyType>>();
assert<S.IsLiteral<keyof MyObject>>();
assert<B.Not<S.IsLiteral<string>>>();
assert<B.Not<S.IsLiteral<unknown>>>();

import * as B from '../../src/boolean';
import { assert, Assignable } from '../../src/common';
import * as S from '../../src/string';

const enum MyNumEnum {
  A = 0,
  B = 1,
}

enum MyStrEnum {
  A = 'A',
  B = 'B',
}

assert<Assignable<'a' | 'b', S.TemplatePart>>();
assert<Assignable<MyStrEnum.A, S.TemplatePart>>();
assert<Assignable<MyStrEnum, S.TemplatePart>>();
assert<Assignable<string, S.TemplatePart>>();

assert<Assignable<1 | 2 | 3, S.TemplatePart>>();
assert<Assignable<MyNumEnum.A, S.TemplatePart>>();
assert<Assignable<MyNumEnum, S.TemplatePart>>();
assert<Assignable<number, S.TemplatePart>>();

assert<Assignable<400n, S.TemplatePart>>();
assert<Assignable<bigint, S.TemplatePart>>();

assert<Assignable<true, S.TemplatePart>>();
assert<Assignable<false, S.TemplatePart>>();
assert<Assignable<boolean, S.TemplatePart>>();

assert<B.Not<Assignable<{}, S.TemplatePart>>>();
assert<B.Not<Assignable<undefined, S.TemplatePart>>>();
assert<B.Not<Assignable<null, S.TemplatePart>>>();
assert<B.Not<Assignable<unknown, S.TemplatePart>>>();
assert<B.Not<Assignable<() => void, S.TemplatePart>>>();

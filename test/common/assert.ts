import * as B from 'boolean';
import {
  assert,
  Assignable,
  cases,
  Equals,
  Expect,
  ExpectFalse,
  ExpectTrue,
  IsAny,
  IsNever,
  IsUnknown,
  Optional,
} from 'common';

describe(`assert`, () => {
  it(`works`, () => {
    (s: string | Buffer) => {
      assert(typeof s === 'string');
      return s.toLowerCase();
    };

    (s: string | Buffer) => {
      assert(typeof s !== 'string');
      return s.byteLength;
    };

    type E1 = 'a' | 'b';
    type E2 = 'a' | 'b' | 'c';
    assert<Assignable<E1, E2>>();
    assert<B.Not<Assignable<E2, E1>>>();
  });
});

describe(`Expect, ExpectFalse, ExpectTrue`, () => {
  cases<
    [
      ExpectFalse<IsNever<string>>,
      ExpectFalse<IsUnknown<number>>,
      ExpectTrue<IsAny<any>>,
      ExpectTrue<Assignable<'a', string>>,
      Expect<Equals<Optional<number>, number | undefined>, true>,
    ]
  >;
});

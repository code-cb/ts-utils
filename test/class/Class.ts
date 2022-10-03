import * as C from 'class';
import { assert, Assignable } from 'common';

declare abstract class MyErrorBase {
  constructor(message: string);
}

declare class MyError extends MyErrorBase {
  constructor(message: string, trace: string[]);
}

describe(`C.Class`, () => {
  it(`works`, () => {
    assert<Assignable<C.Class<[string, string[]], MyError>, typeof MyError>>();
    assert<Assignable<typeof MyError, C.Class<[string, string[]], MyError>>>();
  });
});

describe(`C.AbstractClass`, () => {
  it(`works`, () => {
    assert<
      Assignable<C.AbstractClass<[string], MyErrorBase>, typeof MyErrorBase>
    >();
    assert<
      Assignable<typeof MyErrorBase, C.AbstractClass<[string], MyErrorBase>>
    >();
  });
});

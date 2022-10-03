import * as C from 'class';
import { assert, Equals } from 'common';

declare class MyError {
  constructor(msg: string);
}

describe(`C.Constructor`, () => {
  it(`works`, () => {
    assert<
      Equals<C.Constructor<[string], MyError>, new (msg: string) => MyError>
    >();
  });
});

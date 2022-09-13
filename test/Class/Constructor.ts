import * as C from '../../src/class';
import { assert, Equals } from '../../src/common';

declare class MyError {
  constructor(msg: string);
}

assert<
  Equals<C.Constructor<[string], MyError>, new (msg: string) => MyError>
>();

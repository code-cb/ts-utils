import * as C from '../../sources/class';
import { assert, Equals } from '../../sources/common';

declare class MyError {
  constructor(msg: string);
}

assert<
  Equals<C.Constructor<[string], MyError>, new (msg: string) => MyError>
>();

import * as C from '../../src/class/index.js';
import { assert, Equals } from '../../src/common/index.js';

declare class MyError {
  constructor(msg: string);
}

assert<
  Equals<C.Constructor<[string], MyError>, new (msg: string) => MyError>
>();

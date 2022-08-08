import { assert, C, Equals } from '../../src/index.js';

declare class MyError {
  constructor(msg: string);
}

assert<
  Equals<C.Constructor<[string], MyError>, new (msg: string) => MyError>
>();

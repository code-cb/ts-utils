import { assert, C, Equals } from '../../src/index.js';

declare class MyError {
  constructor(message: string);
}

assert<Equals<C.Instance<typeof MyError>, MyError>>();

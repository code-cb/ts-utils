import * as C from '../../src/class/index.js';
import { assert, Equals } from '../../src/common/index.js';

declare abstract class MyErrorBase {
  constructor(message: string);
}

declare class MyError extends MyErrorBase {
  constructor(message: string, trace: string[]);
}

assert<Equals<C.Instance<typeof MyErrorBase>, MyErrorBase>>();
assert<Equals<InstanceType<typeof MyErrorBase>, MyErrorBase>>();
assert<Equals<C.Instance<typeof MyError>, MyError>>();
assert<Equals<InstanceType<typeof MyError>, MyError>>();

import * as C from '../../src/class/index.js';
import { assert, Assignable } from '../../src/common/index.js';

declare abstract class MyErrorBase {
  constructor(message: string);
}

declare class MyError extends MyErrorBase {
  constructor(message: string, trace: string[]);
}

assert<Assignable<C.Class<[string, string[]], MyError>, typeof MyError>>();
assert<Assignable<typeof MyError, C.Class<[string, string[]], MyError>>>();

assert<
  Assignable<C.AbstractClass<[string], MyErrorBase>, typeof MyErrorBase>
>();
assert<
  Assignable<typeof MyErrorBase, C.AbstractClass<[string], MyErrorBase>>
>();

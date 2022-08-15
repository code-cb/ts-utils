import * as C from '../../src/class/index.js';
import { assert, Equals } from '../../src/common/index.js';

declare abstract class MyErrorBase {
  constructor(message: string);
}

declare class MyError extends MyErrorBase {
  constructor(message: string, trace: string[]);
}

assert<Equals<C.Parameters<typeof MyErrorBase>, [string]>>();
assert<Equals<ConstructorParameters<typeof MyErrorBase>, [string]>>();
assert<Equals<C.Parameters<typeof MyError>, [string, string[]]>>();
assert<Equals<ConstructorParameters<typeof MyError>, [string, string[]]>>();

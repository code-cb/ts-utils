import { assert, Equals } from '../../src/common';
import * as F from '../../src/function';

assert<Equals<F.Func, () => void>>();
assert<Equals<F.Func<[string, boolean?]>, (a: string, b?: boolean) => void>>();
assert<Equals<F.Func<unknown[], number>, (...args: unknown[]) => number>>();

assert<Equals<F.AnyFunc, (...args: any[]) => any>>();

assert<Equals<F.VoidFunc, () => void>>();

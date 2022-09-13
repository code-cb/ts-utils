import { assert, Equals } from '../../sources/common';
import * as F from '../../sources/function';

assert<Equals<F.Func, () => void>>();
assert<Equals<F.Func<[string, boolean?]>, (a: string, b?: boolean) => void>>();
assert<Equals<F.Func<unknown[], number>, (...args: unknown[]) => number>>();

assert<Equals<F.AnyFunc, (...args: any[]) => any>>();

assert<Equals<F.VoidFunc, () => void>>();

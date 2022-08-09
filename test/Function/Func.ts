import { assert, Equals, F } from '../../src/index.js';

assert<Equals<F.Func, () => void>>();
assert<Equals<F.Func<[string, boolean?]>, (a: string, b?: boolean) => void>>();
assert<Equals<F.Func<unknown[], number>, (...args: unknown[]) => number>>();

assert<Equals<F.AnyFunc, (...args: any[]) => any>>();

assert<Equals<F.VoidFunc, () => void>>();

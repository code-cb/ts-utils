import { assert, Equals, Func } from '../index.js';

assert<Equals<Func, () => void>>();
assert<Equals<Func<[string, boolean?]>, (a: string, b?: boolean) => void>>();
assert<Equals<Func<unknown[], number>, (...args: unknown[]) => number>>();

import { AnyFunc, assert, Equals } from '../index.js';

assert<Equals<AnyFunc, (...args: any[]) => any>>();

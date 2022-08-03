import { assert, ClassCtor, Equals } from '../index.js';

declare class MyError {
  constructor(msg: string);
}

assert<Equals<ClassCtor<[string], MyError>, new (msg: string) => MyError>>();

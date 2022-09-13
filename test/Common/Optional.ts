import { asOptional, assert, Equals, Optional } from '../../src/common';

assert<Equals<Optional<number>, number | undefined>>();

const obj = { a: 1, b: 2 };
type ObjKey = keyof typeof obj;

const getValue1 = (key: string) => obj[key as ObjKey];
assert<Equals<ReturnType<typeof getValue1>, number>>();

const getValue2 = (key: string) => asOptional(obj[key as ObjKey]);
assert<Equals<ReturnType<typeof getValue2>, number | undefined>>();

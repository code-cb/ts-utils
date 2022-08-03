import { assert, Assignable, Equals, Id, id } from '../index.js';

const u1 = {
  name: 'Mary',
  gender: 'female',
};
assert<Equals<typeof u1, { name: string; gender: string }>>();

const u2 = {
  name: 'John',
  gender: id<'male' | 'female'>('male'),
};
assert<Equals<typeof u2, { name: string; gender: 'male' | 'female' }>>();

interface Circle {
  kind: 'circle';
  radius: number;
}

interface Rectangle {
  kind: 'rectangle';
  width: number;
  height: number;
}

type Shape = Circle | Rectangle;

declare const getArea: (shape: Shape) => number;

getArea({ kind: 'circle', radius: 5 });
getArea({ kind: 'rectangle', width: 10, height: 20 });
getArea(id<Circle>({ kind: 'circle', radius: 5 }));

assert<Equals<Id<Circle, Circle>, Circle>>();

interface Options {
  a?: number;
  b?: string;
  c?: boolean;
}

const o1 = id<Options>()({});
assert<Assignable<typeof o1, Options>>();
assert<Equals<typeof o1, {}>>();

const o2 = id<Options>()({ a: 1 });
assert<Assignable<typeof o2, Options>>();
assert<Equals<typeof o2, { a: number }>>();

const o3 = id<Options>()({ a: 1, b: 'foo' });
assert<Assignable<typeof o3, Options>>();
assert<Equals<typeof o3, { a: number; b: string }>>();

const o4 = id<Options>()({ a: 1, b: 'foo', c: true });
assert<Assignable<typeof o4, Options>>();
assert<Equals<typeof o4, { a: number; b: string; c: true }>>();

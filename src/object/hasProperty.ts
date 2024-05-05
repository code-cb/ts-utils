/**
 * References:
 * - https://fettblog.eu/typescript-hasownproperty/
 * - https://github.com/sindresorhus/ts-extras/blob/061b8f5a506f125cfd2b172cbb91a15fb702997f/source/object-has-own.ts
 */

import { Maybe } from '../common';
import { MarkRequired } from './MarkRequired';

type ObjectMayHaveProperty<Obj, Prop extends PropertyKey> = Extract<
  Obj,
  { [K in Prop]?: any }
>;

export type ObjectWithProperty<
  Obj extends Maybe<object>,
  Prop extends PropertyKey,
> =
  ObjectMayHaveProperty<Obj, Prop> extends never
    ? Obj & Record<Prop, unknown>
    : MarkRequired<ObjectMayHaveProperty<Obj, Prop>, Prop, false>;

/**
 * Since TypeScript 4.9 we can the `in` property to have a quite similar effect. See the tests for more detail.
 */
export const hasProperty = <
  Obj extends Maybe<object>,
  Prop extends PropertyKey,
>(
  obj: Obj,
  prop: Prop,
): // @ts-ignore
obj is ObjectWithProperty<Obj, Prop> => !!obj && prop in obj;

export const hasOwnProperty = <
  Obj extends Maybe<object>,
  Prop extends PropertyKey,
>(
  obj: Obj,
  prop: Prop,
): // @ts-ignore
obj is ObjectWithProperty<Obj, Prop> => !!obj?.hasOwnProperty(prop);

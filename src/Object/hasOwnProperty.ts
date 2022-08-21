/**
 * References:
 * - https://fettblog.eu/typescript-hasownproperty/
 * - https://github.com/sindresorhus/ts-extras/blob/061b8f5a506f125cfd2b172cbb91a15fb702997f/source/object-has-own.ts
 */

import { Maybe } from '../common/Maybe.js';

export const hasOwnProperty = <
  Obj extends Maybe<object>,
  Prop extends PropertyKey,
>(
  obj: Obj,
  prop: Prop,
): obj is Obj & Record<Prop, unknown> => !!obj?.hasOwnProperty(prop);

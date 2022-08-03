/**
 * References:
 * - https://effectivetypescript.com/2020/05/12/unionize-objectify/
 */

import { Unite } from './Unite.js';

export type Unionize<
  Obj extends object,
  KeyProp extends PropertyKey = 'k',
  ValueProp extends PropertyKey = 'v',
> = {
  [K in keyof Obj]-?: Unite<Record<KeyProp, K> & Record<ValueProp, Obj[K]>>;
}[keyof Obj];

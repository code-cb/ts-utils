/**
 * References:
 * - https://effectivetypescript.com/2020/05/12/unionize-objectify/
 * - https://github.com/garronej/tsafe/blob/debb125bef32a6312c0381969968c529dae25e17/src/objectEntries.ts
 * - https://github.com/sindresorhus/ts-extras/blob/2874930a648d7d7cdd6c742da2ec091670144f04/source/object-entries.ts
 */

import { Equals, If } from '../common';
import { Value } from './Value';

export type Unionize<Obj extends object> = Value<{
  [K in keyof Obj]-?: [K, Obj[K]];
}>;

export type Entries<Obj extends object> = If<
  Equals<Obj, {}>,
  [],
  Array<Unionize<Obj>>
>;

export const entries = <Obj extends object>(obj: Obj) =>
  Object.entries(obj) as unknown as Entries<Obj>;

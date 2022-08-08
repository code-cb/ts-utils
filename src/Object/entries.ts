/**
 * References:
 * - https://effectivetypescript.com/2020/05/12/unionize-objectify/
 * - https://github.com/garronej/tsafe/blob/debb125bef32a6312c0381969968c529dae25e17/src/objectEntries.ts
 */

import { Value } from './Value.js';

export type Unionize<Obj extends object> = Value<{
  [K in keyof Obj]-?: [K, Obj[K]];
}>;

/**
 * This is just an alias for Unionize<Obj>
 */
export type Entries<Obj extends object> = Unionize<Obj>;

export const entries = <Obj extends object>(obj: Obj) =>
  Object.entries(obj) as unknown as Entries<Obj>;

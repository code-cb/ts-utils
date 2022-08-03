/**
 * References:
 * - https://github.com/garronej/tsafe/blob/debb125bef32a6312c0381969968c529dae25e17/src/objectEntries.ts
 * - Unionize.ts: instead of unionizing to an object, ObjectEntries unionizes to an array of tuples.
 */

export type ObjectEntries<Obj extends object> = {
  [K in keyof Obj]-?: [K, Obj[K]];
}[keyof Obj];

export const objectEntries = <Obj extends object>(obj: Obj) =>
  Object.entries(obj) as unknown as ObjectEntries<Obj>;

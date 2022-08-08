/**
 * References:
 * - https://effectivetypescript.com/2020/05/12/unionize-objectify/
 * - https://github.com/garronej/tsafe/blob/debb125bef32a6312c0381969968c529dae25e17/src/objectFromEntries.ts
 */

export type Objectify<Union extends readonly [PropertyKey, unknown]> = {
  [K in Union[0]]: Extract<Union, { [0]: K }>[1];
};

/**
 * This is just an alias for Objectify<Union>
 */
export type FromEntries<Entries extends readonly [PropertyKey, unknown]> =
  Objectify<Entries>;

export const fromEntries = <Entries extends readonly [PropertyKey, unknown]>(
  entries: ReadonlyArray<Entries>,
) => Object.fromEntries(entries) as FromEntries<Entries>;

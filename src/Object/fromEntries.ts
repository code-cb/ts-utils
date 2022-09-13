/**
 * References:
 * - https://effectivetypescript.com/2020/05/12/unionize-objectify/
 * - https://github.com/garronej/tsafe/blob/debb125bef32a6312c0381969968c529dae25e17/src/objectFromEntries.ts
 * - https://github.com/sindresorhus/ts-extras/blob/2874930a648d7d7cdd6c742da2ec091670144f04/source/object-from-entries.ts
 */

export type Objectify<Union extends readonly [PropertyKey, unknown]> = {
  [K in Union[0]]: Extract<Union, { [0]: K }>[1];
};

export const fromEntries = <Entry extends readonly [PropertyKey, unknown]>(
  entries: ReadonlyArray<Entry>,
) => Object.fromEntries(entries) as Objectify<Entry>;

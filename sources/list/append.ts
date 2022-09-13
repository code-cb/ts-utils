/**
 * References:
 * - https://github.com/millsp/ts-toolbelt/blob/7d6c44df57c5024d565041e33894660d868a2d86/sources/List/Append.ts
 */

export type Append<List extends ReadonlyArray<any>, Value> = [...List, Value];

export const append = <List extends ReadonlyArray<any>, Value>(
  list: List,
  value: Value,
) => [...list, value] as Append<List, Value>;

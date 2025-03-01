/**
 * References:
 * - https://github.com/millsp/ts-toolbelt/blob/7d6c44df57c5024d565041e33894660d868a2d86/sources/List/Append.ts
 */

export type Append<List extends readonly any[], Value> = [...List, Value];

export const append = <List extends readonly any[], Value>(
  list: List,
  value: Value,
) => [...list, value] as Append<List, Value>;

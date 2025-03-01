/**
 * References:
 * - https://github.com/millsp/ts-toolbelt/blob/7d6c44df57c5024d565041e33894660d868a2d86/sources/List/Prepend.ts
 */

export type Prepend<List extends readonly any[], Value> = [Value, ...List];

export const prepend = <List extends readonly any[], Value>(
  list: List,
  value: Value,
) => [value, ...list] as Prepend<List, Value>;

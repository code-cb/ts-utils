/**
 * References:
 * - https://github.com/sindresorhus/ts-extras/blob/04f28183465a5d102ea12cff3ab51a8d641d4fb8/source/set-has.ts
 */

import { includes } from './includes';

export function has<Item, Value = unknown>(
  set: ReadonlySet<Item>,
  value: Value,
): value is Value & Item;
export function has<Key, Value = unknown>(
  map: ReadonlyMap<Key, unknown>,
  value: Value,
): value is Value & Key;
export function has<Item, Value = unknown>(
  iterable: Iterable<Item>,
  value: Value,
): value is Value & Item;
export function has<Item, Value = unknown>(
  list: ReadonlySet<Item> | ReadonlyMap<Item, unknown> | Iterable<Item>,
  value: Value,
) {
  return 'has' in list ? list.has(value as any) : includes(list, value, 0);
}

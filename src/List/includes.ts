/**
 * References:
 * - https://github.com/sindresorhus/ts-extras/blob/04f28183465a5d102ea12cff3ab51a8d641d4fb8/source/array-includes.ts
 */

export const includes = <Item, Value = unknown>(
  list: Iterable<Item>,
  value: Value,
  fromIndex = 0,
): value is Value & Item => {
  let index = 0;
  for (const item of list) {
    if (index++ >= fromIndex && item === (value as any)) return true;
  }
  return false;
};

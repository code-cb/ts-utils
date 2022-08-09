export const includes = <Item, Value>(
  list: Iterable<Item>,
  value: Value,
): value is Value & Item => {
  for (const item of list) {
    if (item === (value as any)) return true;
  }
  return false;
};

/**
 * References:
 * - https://github.com/sindresorhus/ts-extras/blob/04f28183465a5d102ea12cff3ab51a8d641d4fb8/source/array-includes.ts
 */

const includesImpl = (...args: IncludesArgs<any, any>) => {
  const [list, value, fromIndex = 0] = args;
  let index = 0;
  for (const item of list) {
    if (index++ >= fromIndex && item === (value as any)) return true;
  }
  return false;
};

type IncludesArgs<Item, Value> = [
  list: Iterable<Item>,
  value: Value,
  fromIndex?: number | undefined,
];

export function includes<Item, Value = unknown>(
  list: Iterable<Item>,
  value: Value,
  fromIndex?: number,
): value is Value & Item;
export function includes<SuperType>(): <
  Item extends SuperType,
  Value = unknown,
>(
  list: Iterable<Item>,
  value: Value,
  fromIndex?: number,
) => value is Value & Item;
export function includes(...args: IncludesArgs<any, any> | []): any {
  return args.length ? includesImpl(...args) : includesImpl;
}

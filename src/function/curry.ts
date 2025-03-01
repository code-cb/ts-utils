import { If } from '../common';
import { IsLiteral } from '../list';
import { SkipImpl } from '../list/Skip';
import { SubListImpl } from '../list/SubList';

type CurryImpl<Args extends readonly any[], Return> = <
  SubArgs extends SubListImpl<Args>,
>(
  ...args: SubArgs
) => SubArgs extends Args
  ? Return
  : CurryImpl<SkipImpl<Args, SubArgs['length']>, Return>;

export type Curry<Args extends readonly any[], Return> = If<
  IsLiteral<Args>,
  CurryImpl<Args, Return>,
  (...args: Args[number][]) => Return | Curry<Args[number][], Return>
>;

const curryImpl =
  (f: (...args: any[]) => any, argsLength: number) =>
  (...args: any[]) => {
    if (args.length >= argsLength) return f(...args);
    return curryImpl(
      (...restArgs: any[]) => f(...[...args, ...restArgs]),
      argsLength - args.length,
    );
  };

export const curry = <Args extends readonly any[], Return>(
  f: (...args: Args) => Return,
): Curry<Args, Return> => curryImpl(f, f.length);

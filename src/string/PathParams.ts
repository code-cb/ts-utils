/**
 * References:
 * - https://github.com/DefinitelyTyped/DefinitelyTyped/blob/6fbaad2125fa981ecf4916f2af21bc15f035312b/types/express-serve-static-core/index.d.ts#L106
 */

import { If } from '../common';
import { IsLiteral } from './Literal';

type PathTail<Path extends string> = Path extends `:${infer Tail}`
  ? Tail
  : Path extends `${string}/:${infer Tail}`
    ? Tail
    : '';

type PathKeyImpl<
  Path extends string,
  Key extends string = never,
  Tail extends string = PathTail<Path>,
> = Tail extends `${infer K}/${infer Rest}`
  ? PathKeyImpl<Rest, Key | K>
  : Tail extends ''
    ? Key
    : Key | Tail;

export type PathParams<Path extends string> = If<
  IsLiteral<Path>,
  Record<PathKeyImpl<Path>, string>,
  Record<string, string>
>;

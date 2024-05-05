import { IsLiteral } from './Literal';

type SnakeConcat<Head extends string, Char extends string> = Head extends ''
  ? Lowercase<Char>
  : Char extends Uppercase<Char>
    ? `${Head}-${Lowercase<Char>}`
    : `${Head}${Char}`;

type CamelToSnakeImpl<
  Str extends string,
  Result extends string = '',
> = Str extends `${infer First}${infer Tail}`
  ? CamelToSnakeImpl<Tail, SnakeConcat<Result, First>>
  : Result;

export type CamelToSnake<Str extends string> =
  IsLiteral<Str> extends false ? string : CamelToSnakeImpl<Str>;

export const camelToSnake = <Str extends string>(str: Str) =>
  str
    .replace(/[A-Z]/g, c => `-${c.toLowerCase()}`)
    .replace(/^-/, '') as CamelToSnake<Str>;

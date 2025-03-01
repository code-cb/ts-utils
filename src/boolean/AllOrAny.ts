import { If } from '../common';
import { Element, IsLiteral } from '../list';

type One<
  Condition extends boolean,
  WhenAny extends boolean,
  WhenAll extends boolean,
> = boolean extends Condition
  ? boolean
  : [Condition] extends [WhenAny]
    ? WhenAny
    : WhenAll;

type AllOrAny<
  Conditions extends ReadonlyArray<boolean>,
  WhenAny extends boolean,
  WhenAll extends boolean,
> = If<
  IsLiteral<Conditions>,
  Conditions extends [
    infer First extends boolean,
    ...infer Tail extends boolean[],
  ]
    ? One<First, WhenAny, AllOrAny<Tail, WhenAny, WhenAll>>
    : WhenAll,
  One<Element<Conditions>, WhenAny, WhenAll>
>;

export type All<Conditions extends readonly boolean[]> = AllOrAny<
  Conditions,
  false,
  true
>;

export type Any<Conditions extends readonly boolean[]> = AllOrAny<
  Conditions,
  true,
  false
>;

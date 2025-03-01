/**
 * References:
 * - https://2ality.com/2025/02/satisfies-operator.html#type-level-satisfaction-check
 */

export type Satisfies<Type extends Constraint, Constraint> = Type;

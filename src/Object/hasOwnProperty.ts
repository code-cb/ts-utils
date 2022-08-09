/**
 * References:
 * - https://fettblog.eu/typescript-hasownproperty/
 */

export const hasOwnProperty = <Obj extends object, Prop extends PropertyKey>(
  obj: Obj,
  prop: Prop,
): obj is Obj & Record<Prop, unknown> => !!obj?.hasOwnProperty(prop);

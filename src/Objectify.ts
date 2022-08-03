/**
 * References:
 * - https://effectivetypescript.com/2020/05/12/unionize-objectify/
 * - https://github.com/garronej/tsafe/blob/debb125bef32a6312c0381969968c529dae25e17/src/objectFromEntries.ts
 */

export type Objectify<
  KeyProp extends PropertyKey,
  ValueProp extends PropertyKey,
  Union extends {
    [K in KeyProp]: PropertyKey;
  } & { [V in ValueProp]: unknown },
> = {
  [K in Union[KeyProp]]: Extract<Union, { [KP in KeyProp]: K }>[ValueProp];
};

// export type Objectify<
//   Union extends { [K in string]: unknown } | { [K in number]: unknown },
//   KeyProp extends keyof Union,
//   ValueProp extends keyof Union,
// > = {
//   [K in Union[KeyProp] as Union[KeyProp] & PropertyKey]: Extract<
//     Union,
//     { [Key in KeyProp]: K }
//   >[ValueProp];
// };

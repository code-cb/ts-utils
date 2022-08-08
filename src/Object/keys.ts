/**
 * References:
 * - https://github.com/garronej/tsafe/blob/debb125bef32a6312c0381969968c529dae25e17/src/objectKeys.ts
 */

export const keys = <Obj extends object>(obj: Obj) =>
  Object.keys(obj) as Array<keyof Obj>;

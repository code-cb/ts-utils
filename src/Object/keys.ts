/**
 * References:
 * - https://github.com/garronej/tsafe/blob/debb125bef32a6312c0381969968c529dae25e17/src/objectKeys.ts
 * - https://github.com/sindresorhus/ts-extras/blob/2874930a648d7d7cdd6c742da2ec091670144f04/source/object-keys.ts
 */

export type Key<Obj extends object> = `${Exclude<keyof Obj, symbol>}`;

export const keys = <Obj extends object>(obj: Obj) =>
  Object.keys(obj) as Array<Key<Obj>>;

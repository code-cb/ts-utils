/**
 * References:
 * - https://github.com/millsp/ts-toolbelt/blob/7d6c44df57c5024d565041e33894660d868a2d86/sources/Any/Extends.ts
 * - https://github.com/millsp/ts-toolbelt/blob/7d6c44df57c5024d565041e33894660d868a2d86/sources/Any/Contains.ts
 */

export type Assignable<A, B> = [A] extends [never]
  ? false
  : [A] extends [B]
  ? true
  : false;

export const assignable = <Value>(_value: Value) => {};

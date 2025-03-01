/**
 * References:
 * - https://github.com/millsp/ts-toolbelt/blob/7d6c44df57c5024d565041e33894660d868a2d86/sources/Any/Extends.ts
 * - https://github.com/millsp/ts-toolbelt/blob/7d6c44df57c5024d565041e33894660d868a2d86/sources/Any/Contains.ts
 * - https://github.com/rauschma/asserttt/blob/main/src/asserttt.ts#L12
 * - https://github.com/rauschma/asserttt/blob/main/src/asserttt.ts#L33
 */

export type Assignable<A, B> = [A] extends [never]
  ? false
  : [A] extends [B]
    ? true
    : false;

export const assignable = <Value>(_value: Value) => {};

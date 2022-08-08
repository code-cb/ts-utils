/**
 * References:
 * - https://github.com/millsp/ts-toolbelt/blob/4c7618d77b07d6b8c6dfd5087aa85a073bf57db3/sources/Any/If.ts
 */

export type If<Condition extends boolean, Then, Else> = Condition extends true
  ? Then
  : Else;

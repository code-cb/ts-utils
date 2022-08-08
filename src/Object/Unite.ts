/**
 * References:
 * - https://github.com/garronej/tsafe/blob/9fd80c7b449d4402d7b4e1e8cfcd9601f8c0992b/src/tools/Unite.ts
 * - https://github.com/millsp/ts-toolbelt/blob/309c3b005712a3f1552ea21e59be335dbc4125b1/sources/Any/Compute.ts#L10
 */

export type Unite<T> = T extends Record<string, unknown>
  ? { [Key in keyof T]: T[Key] }
  : T;

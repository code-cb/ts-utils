/**
 * References:
 * - https://effectivetypescript.com/2022/02/25/gentips-4-display/
 * - https://stackoverflow.com/a/69976234/18801777
 * - https://github.com/millsp/ts-toolbelt/blob/309c3b005712a3f1552ea21e59be335dbc4125b1/sources/Any/Compute.ts#L10
 * - https://github.com/garronej/tsafe/blob/9fd80c7b449d4402d7b4e1e8cfcd9601f8c0992b/src/tools/Unite.ts
 */

export type Compute<Value> = Value extends Function
  ? Value
  : { [Key in keyof Value]: Value[Key] } & {};

/**
 * References:
 * - https://github.com/sindresorhus/type-fest/blob/043b732bf02c2b700245aa6501116a6646d50732/source/basic.d.ts#L45
 */

export type JsonPrimitive = string | number | boolean | null;

export type JsonArray = Array<JsonValue>;

export type JsonObject = {
  [key: string]: JsonValue;
};

export type JsonValue = JsonPrimitive | JsonArray | JsonObject;

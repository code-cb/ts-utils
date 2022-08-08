/**
 * References:
 * - https://stackoverflow.com/questions/56415826/is-it-possible-to-precisely-type-invert-in-typescript/56416192#56416192
 */

export type Invert<Obj extends Record<PropertyKey, PropertyKey>> = {
  [K in keyof Obj as Obj[K]]: K;
};

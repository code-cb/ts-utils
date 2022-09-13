/**
 * References:
 * - https://github.com/millsp/ts-toolbelt/blob/7d6c44df57c5024d565041e33894660d868a2d86/sources/Any/Type.ts
 * - https://github.com/sindresorhus/type-fest/blob/d4d44812c4958ae1447f94d83624f1abfcb86f47/source/opaque.d.ts
 * - https://github.com/ts-essentials/ts-essentials/blob/c63e30e6112ed93df0bcf05028cfe1d67617f93d/lib/types.ts#L422
 */

declare const tag: unique symbol;

interface Tagged<Tag> {
  [tag]: Tag;
}

export type Type<Base, Tag> = Tagged<Tag> & Base;

export type UnwrapType<OpaqueType extends Tagged<any>> =
  OpaqueType extends Type<infer Base, OpaqueType[typeof tag]> ? Base : never;

export const ofType = <OpaqueType extends Tagged<any>>(
  value: UnwrapType<OpaqueType>,
) => value as OpaqueType;

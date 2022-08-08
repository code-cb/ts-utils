/**
 * References:
 * - https://github.com/pelotom/type-zoo/blob/28951c520e6daf03e9ff61ddb0f3880eb6f0a501/types/index.d.ts#L33
 * - https://github.com/Microsoft/TypeScript/issues/12215#issuecomment-377567046
 */

 export type OmitStrict<Obj extends object, Key extends keyof Obj> = Pick<
 Obj,
 Exclude<keyof Obj, Key>
>;

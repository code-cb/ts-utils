/**
 * References:
 * - https://github.com/millsp/ts-toolbelt/blob/7d6c44df57c5024d565041e33894660d868a2d86/sources/Function/NoInfer.ts
 * - https://stackoverflow.com/a/56688073/18801777
 * - https://github.com/Microsoft/TypeScript/issues/14829
 * - https://github.com/pelotom/type-zoo/blob/28951c520e6daf03e9ff61ddb0f3880eb6f0a501/types/index.d.ts#L58
 */

/**
 * @deprecated Use the builtin `NoInfer` instead
 */
export type NoInfer<Value> = [Value][Value extends any ? 0 : never];

/**
 * References:
 * - https://github.com/garronej/tsafe/blob/e0e58159799fe78de0e4610e41f7d6e9f4b76797/src/symToStr.ts
 */

export const symToStr = <Obj extends Record<string, unknown>>(o: Obj) =>
  Object.keys(o)[0] as keyof Obj;

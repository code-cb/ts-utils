/**
 * References:
 * - https://github.com/millsp/ts-toolbelt/blob/7d6c44df57c5024d565041e33894660d868a2d86/sources/Boolean/Xor.ts
 * - https://github.com/andnp/SimplyTyped/blob/master/src/types/conditionals.ts#L13
 */

type XorMap = {
  true: {
    true: false;
    false: true;
  };
  false: {
    true: true;
    false: false;
  };
};

export type Xor<A extends boolean, B extends boolean> = XorMap[`${A}`][`${B}`];

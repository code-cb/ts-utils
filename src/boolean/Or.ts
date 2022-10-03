/**
 * References:
 * - https://github.com/millsp/ts-toolbelt/blob/7d6c44df57c5024d565041e33894660d868a2d86/sources/Boolean/Or.ts
 */

type OrMap = {
  true: {
    true: true;
    false: true;
  };
  false: {
    true: true;
    false: false;
  };
};

export type Or<A extends boolean, B extends boolean> = OrMap[`${A}`][`${B}`];

import { assert, assertNever, Equals } from '../../src/common';

type E1 = 'a' | 'b' | 'c';
const f1 = (e: E1) => {
  switch (e) {
    case 'a':
      return 1;

    case 'b':
      return 2;

    case 'c':
      return 3;

    default:
      return assertNever(e);
  }
};
assert<Equals<ReturnType<typeof f1>, 1 | 2 | 3>>();

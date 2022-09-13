import { expectAssignable } from '../../src/common';
import * as O from '../../src/object';

expectAssignable<number>(42);
expectAssignable<O.Dict<Function>>({ run: () => {} });
expectAssignable<{ a?: number; b?: string }>({ a: 42 });

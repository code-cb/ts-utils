import * as O from '../../src/object/index.js';
import { expectAssignable } from '../../src/common/index.js';

expectAssignable<number>(42);
expectAssignable<O.Dict<Function>>({ run: () => {} });
expectAssignable<{ a?: number; b?: string }>({ a: 42 });

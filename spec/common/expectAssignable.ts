import { expectAssignable } from '../../sources/common';
import * as O from '../../sources/object';

expectAssignable<number>(42);
expectAssignable<O.Dict<Function>>({ run: () => {} });
expectAssignable<{ a?: number; b?: string }>({ a: 42 });

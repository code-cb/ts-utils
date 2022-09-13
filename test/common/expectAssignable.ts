import { expectAssignable } from 'common';
import * as O from 'object';

expectAssignable<number>(42);
expectAssignable<O.Dict<Function>>({ run: () => {} });
expectAssignable<{ a?: number; b?: string }>({ a: 42 });

import { assert, Equals, If } from '../../src/common/index.js';

assert<Equals<If<true, 'a', 'b'>, 'a'>>();

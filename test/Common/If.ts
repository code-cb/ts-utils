import { assert, Equals, If } from '../../src/index.js';

assert<Equals<If<true, 'a', 'b'>, 'a'>>();
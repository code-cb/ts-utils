import { assert, Equals, If } from '../../src/common';

assert<Equals<If<true, 'a', 'b'>, 'a'>>();

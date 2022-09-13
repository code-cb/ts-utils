import { assert, Equals, If } from '../../sources/common';

assert<Equals<If<true, 'a', 'b'>, 'a'>>();

import { assert, Equals, If } from 'common';

assert<Equals<If<true, 'a', 'b'>, 'a'>>();

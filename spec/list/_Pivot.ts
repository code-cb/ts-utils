import { assert, Equals } from '../../sources/common';
import { PivotBackwardImpl, PivotForwardImpl } from '../../sources/list/_Pivot';

type Arr1 = [];
assert<Equals<PivotForwardImpl<Arr1, 0>, [[], []]>>();
assert<Equals<PivotBackwardImpl<Arr1, 0>, [[], []]>>();
assert<Equals<PivotForwardImpl<Arr1, 3>, [[], []]>>();
assert<Equals<PivotBackwardImpl<Arr1, 3>, [[], []]>>();

type Arr2 = readonly [1, 2, 3, 4, 5];
assert<Equals<PivotForwardImpl<Arr2, 0>, [[], readonly [1, 2, 3, 4, 5]]>>();
assert<Equals<PivotBackwardImpl<Arr2, 0>, [readonly [1, 2, 3, 4, 5], []]>>();
assert<Equals<PivotForwardImpl<Arr2, 3>, [[1, 2, 3], [4, 5]]>>();
assert<Equals<PivotBackwardImpl<Arr2, 3>, [[1, 2], [3, 4, 5]]>>();
assert<Equals<PivotForwardImpl<Arr2, 5>, [[1, 2, 3, 4, 5], []]>>();
assert<Equals<PivotBackwardImpl<Arr2, 5>, [[], [1, 2, 3, 4, 5]]>>();
assert<Equals<PivotForwardImpl<Arr2, 8>, [[1, 2, 3, 4, 5], []]>>();
assert<Equals<PivotBackwardImpl<Arr2, 8>, [[], [1, 2, 3, 4, 5]]>>();

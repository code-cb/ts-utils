import * as O from '../../src/object/index.js';

interface SelectBase {
  id?: string;
  name?: string;
}

interface SingleSelect extends SelectBase {
  value: string;
}

interface MultiSelect extends SelectBase {
  multiple: true;
  values: string[];
}

export type Select = O.Exclusive<SingleSelect, MultiSelect>;

declare const processSelect: (select: Select) => void;

processSelect({ value: 'a' });
processSelect({ multiple: true, values: ['a', 'b'] });
// @ts-expect-error
processSelect({ multiple: true, values: ['a', 'b'], value: 'a' });

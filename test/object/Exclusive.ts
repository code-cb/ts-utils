import * as O from 'object';

describe(`O.Exclusive`, () => {
  it(`works`, () => {
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

    type Select = O.Exclusive<SingleSelect, MultiSelect>;

    const processSelect = (_select: Select) => {};

    processSelect({ value: 'a' });
    processSelect({ multiple: true, values: ['a', 'b'] });
    // @ts-expect-error
    processSelect({ multiple: true, values: ['a', 'b'], value: 'a' });
  });
});

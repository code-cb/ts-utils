import { assert, Equals } from 'common';
import * as O from 'object';

describe(`O.Unionize`, () => {
  it(`works`, () => {
    interface ButtonProps {
      onClick: () => void;
    }

    interface InputProps {
      onChange: (value: string) => void;
    }

    interface SelectProps {
      onSelect: (index: number | number[]) => void;
    }

    interface PropsMap {
      button: ButtonProps;
      input: InputProps;
      select: SelectProps;
    }

    assert<
      Equals<
        O.Unionize<PropsMap, 'tag', 'props'>,
        | { tag: 'button'; props: ButtonProps }
        | { tag: 'input'; props: InputProps }
        | { tag: 'select'; props: SelectProps }
      >
    >();
  });
});

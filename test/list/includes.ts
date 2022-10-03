import { assert, Equals } from 'common';
import * as L from 'list';

describe(`L.includes`, () => {
  it(`works`, () => {
    const tuple = ['a', 'b', 'c'] as const;
    (s: 'b' | 'c' | 'd' | undefined) => {
      if (L.includes(tuple, s)) assert<Equals<typeof s, 'b' | 'c'>>();
      else assert<Equals<typeof s, 'd' | undefined>>();
    };
    expect(L.includes(tuple, 'b')).toBe(true);
    expect(L.includes(tuple, 'e')).toBe(false);

    type AppStatus =
      | 'BOOTSTRAPPING'
      | 'MOUNTED'
      | 'MOUNTING'
      | 'UNMOUNTING'
      | 'UPDATING';
    (s: AppStatus) => {
      if (L.includes<AppStatus>()(['BOOTSTRAPPING', 'MOUNTING'], s))
        assert<Equals<typeof s, 'BOOTSTRAPPING' | 'MOUNTING'>>();
      else assert<Equals<typeof s, 'MOUNTED' | 'UNMOUNTING' | 'UPDATING'>>();
    };
    expect(
      L.includes<AppStatus>()(['BOOTSTRAPPING', 'MOUNTING'], 'BOOTSTRAPPING'),
    ).toBe(true);
    expect(
      L.includes<AppStatus>()(['BOOTSTRAPPING', 'MOUNTING'], 'UPDATING'),
    ).toBe(false);
  });
});

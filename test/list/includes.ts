import { assert, Equals } from 'common';
import * as L from 'list';

const tuple = ['a', 'b', 'c'] as const;

export const f1 = (s: 'b' | 'c' | 'd' | undefined) => {
  if (L.includes(tuple, s)) assert<Equals<typeof s, 'b' | 'c'>>();
  else assert<Equals<typeof s, 'd' | undefined>>();
};

type AppStatus =
  | 'BOOTSTRAPPING'
  | 'MOUNTED'
  | 'MOUNTING'
  | 'UNMOUNTING'
  | 'UPDATING';

export const f2 = (s: AppStatus) => {
  if (L.includes<AppStatus>()(['BOOTSTRAPPING', 'MOUNTING'], s))
    assert<Equals<typeof s, 'BOOTSTRAPPING' | 'MOUNTING'>>();
  else assert<Equals<typeof s, 'MOUNTED' | 'UNMOUNTING' | 'UPDATING'>>();
};

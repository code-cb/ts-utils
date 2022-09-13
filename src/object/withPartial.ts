import { Compute } from '../common';

export type WithPartial<
  Obj extends object,
  PartialObj extends Partial<Obj>,
> = Compute<Omit<Obj, keyof PartialObj> & Partial<PartialObj>>;

export const withPartial =
  <Obj extends object>() =>
  <PartialObj extends Partial<Obj>>(partialObj: PartialObj) =>
  (o: WithPartial<Obj, PartialObj>) =>
    ({ ...partialObj, ...o } as unknown as Obj);

export type Expandable<SuperType, Union extends SuperType> =
  | Union
  | Omit<SuperType, ''>;

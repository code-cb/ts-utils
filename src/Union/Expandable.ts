export type Expandable<Set, Union extends Set> = Union | Omit<Set, ''>;

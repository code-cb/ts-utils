export type IsLiteral<List extends ReadonlyArray<any>> = any[] extends List
  ? false
  : true;

export type Literal<List extends ReadonlyArray<any>> = any[] extends List
  ? never
  : List;

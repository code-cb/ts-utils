export type IsLiteral<List extends readonly any[]> = any[] extends List
  ? false
  : true;

export type Literal<List extends readonly any[]> = any[] extends List
  ? never
  : List;

export type IsLiteral<Bool extends boolean> = boolean extends Bool
  ? false
  : true;

export type Literal<Bool extends boolean> = boolean extends Bool ? never : Bool;

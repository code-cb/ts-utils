export type TemplatePart = string | number | bigint | boolean;

export type IsLiteralTemplatePart<Value extends TemplatePart> =
  string extends Value
    ? false
    : number extends Value
      ? false
      : bigint extends Value
        ? false
        : boolean extends Value
          ? false
          : true;

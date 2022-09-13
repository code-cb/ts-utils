export type Dict<Value = string, Key extends PropertyKey = string> = {
  [K in Key]: Value;
};

export declare function copy(value: any): void;

const a = [
  `[Unk]: {value: number, sign: Sign, prev: Unk, next: Unk, oppo: Unk}`,
  ...Array.from({ length: 201 }, (_, i) => {
    const str = (value = 0) =>
      value < -100 || value > 100 ? 'Unk' : `"${value}"`;
    const value = i - 100;
    const sign = value < 0 ? '-' : value > 0 ? '+' : '0';
    return `"${value}": {value: ${value}, sign: "${sign}", prev: ${str(
      value - 1,
    )}, next: ${str(value + 1)}, oppo: "${-value}"}`;
  }),
].join(',\n');

copy(a);

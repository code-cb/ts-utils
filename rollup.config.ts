import { defineConfig, ModuleFormat } from 'rollup';
import { terser } from 'rollup-plugin-terser';
import ts from 'rollup-plugin-ts';

const isDev =
  process.env['NODE_ENV'] === 'development' ||
  process.env['ROLLUP_WATCH'] === 'true';

const extensionMap: Record<ModuleFormat, string> = {
  amd: 'js',
  cjs: 'cjs',
  commonjs: 'cjs',
  esm: 'mjs',
  es: 'mjs',
  iife: 'js',
  module: 'mjs',
  system: 'js',
  systemjs: 'js',
  umd: 'js',
};

const createConfig = ({ format }: { format: ModuleFormat }) =>
  defineConfig({
    input: 'src/index.ts',
    output: {
      dir: `dist/${format}`,
      entryFileNames: `[name].${extensionMap[format]}`,
      format,
      sourcemap: isDev,
    },
    plugins: [ts({ tsconfig: 'tsconfig.build.json' }), !isDev && terser()],
  });

export default [
  createConfig({ format: 'cjs' }),
  createConfig({ format: 'esm' }),
];

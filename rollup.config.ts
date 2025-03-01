import terser from '@rollup/plugin-terser';
import FastGlob from 'fast-glob';
import { basename, dirname } from 'node:path';
import { defineConfig, ModuleFormat } from 'rollup';
import ts from 'rollup-plugin-typescript2';

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
const formats: ModuleFormat[] = ['cjs', 'esm'];
const submodules = FastGlob.sync(['src/*/index.{ts,tsx}'], { stats: false });

export default submodules.map(path => {
  const moduleName = basename(dirname(path));

  return defineConfig({
    input: path,
    output: formats.map(format => ({
      dir: `dist/${format}`,
      entryFileNames: `${moduleName}.${extensionMap[format]}`,
      format,
      sourcemap: isDev,
    })),
    plugins: [ts({ tsconfig: 'tsconfig.build.json' }), !isDev && terser()],
    onwarn: (warning, defaultHandler) => {
      !['EMPTY_BUNDLE'].includes(warning.code!) && defaultHandler(warning);
    },
  });
});

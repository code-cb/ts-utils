import fg from 'fast-glob';
import { basename, dirname } from 'node:path';
import { defineConfig, ModuleFormat } from 'rollup';
import { terser } from 'rollup-plugin-terser';
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

const submodules = fg.sync(['src/*/index.{ts,tsx}'], { stats: false });
const entries = Object.fromEntries(
  submodules.map(s => [`${basename(dirname(s))}`, s]),
);

const createConfig = ({ format }: { format: ModuleFormat }) => {
  const ext = extensionMap[format];
  return defineConfig({
    input: entries,
    output: {
      chunkFileNames: `[name]-[hash].${ext}`,
      dir: `dist/${format}`,
      entryFileNames: `[name]/index.${ext}`,
      format,
      sourcemap: isDev,
    },
    plugins: [
      ts({
        // hook: {
        //   outputPath(path, kind) {
        //     return kind === 'declaration' || kind === 'declarationMap'
        //       ? path.replace(/\.d\.[mc]ts$/, '.d.ts')
        //       : path;
        //   },
        // },
        tsconfig: 'tsconfig.build.json',
      }),
      !isDev && terser(),
    ],
    onwarn: (warning, defaultHandler) => {
      !['EMPTY_BUNDLE'].includes(warning.code!) && defaultHandler(warning);
    },
  });
};

export default [
  createConfig({ format: 'cjs' }),
  createConfig({ format: 'esm' }),
];

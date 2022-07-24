import withSolid from 'rollup-preset-solid';
import {dependencies, peerDependencies} from './package.json';

const externals = [
  ...Object.keys(peerDependencies || {}),
  ...Object.keys(dependencies || {}),
  'solid-js/web',
  'solid-js/store',
  '@vanilla-extract/recipes/createRuntimeFn',
];

export default withSolid({
  input: 'src/index.tsx',
  targets: ['esm', 'cjs'],
  external: externals,
  output: [
    {
      preserveModules: true,
      preserveModulesRoot: 'src',
      // Change .css.js files to something else so that they don't get re-processed by consumer's setup
      // entryFileNames({name}) {
      //   return `${name.replace(/\.css$/, '.css.vanilla')}.js`;
      // },

      // Apply preserveModulesRoot to asset names
      assetFileNames({name}) {
        return name.replace(/^src\//, '');
      },

      exports: 'named',
      dir: './dist/esm',
      format: 'esm',
    },
    {
      preserveModules: true,
      preserveModulesRoot: 'src',
      // Change .css.js files to something else so that they don't get re-processed by consumer's setup
      entryFileNames({name}) {
        return `${name.replace(/\.css$/, '.css.vanilla')}.js`;
      },

      // Apply preserveModulesRoot to asset names
      assetFileNames({name}) {
        return name.replace(/^src\//, '');
      },

      exports: 'named',
      dir: './dist/cjs',
      format: 'cjs',
    },
  ],
});

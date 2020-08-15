import replace from '@rollup/plugin-replace';
import filesize from 'rollup-plugin-filesize';
import resolve from 'rollup-plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

export default {
  input: './dist/emirates-id.js',
  output: {
    file: 'emirates-id.bundled.js',
    format: 'esm',
  },
  onwarn(warning) {
    if (warning.code !== 'THIS_IS_UNDEFINED') {
      console.error(`(!) ${warning.message}`);
    }
  },
  plugins: [
    replace({ 'Reflect.decorate': 'undefined' }),
    resolve(),
    terser({
      module: true,
      warnings: true,
      mangle: {
        properties: {
          regex: /^__/,
        },
      },
    }),
    filesize({
      showBrotliSize: true,
    }),
  ],
};

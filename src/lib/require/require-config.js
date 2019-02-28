const requireConfig = {
  paths: {
    css: './src/lib/require/require-css.min',
    text: './src/lib/require/require-text.min',
    lib: './src/lib',
    "@": './src',
  },
  shim: {
  }
};

require.config(requireConfig);

const requireConfig = {
  paths: {
    css: './src/lib/require/require-css.min',
    text: './src/lib/require/require-text.min',
    vue: './src/lib/vue/vue.min',
    vueRouter: './src/lib/vue/vue-router.min',
    vuex: './src/lib/vue/vuex.min',
    jquery: './src/lib/jquery/jquery-3.3.1.min',
    ELEMENT: './src/lib/element/element-ui',
    echarts: './src/lib/echarts/echarts.min',
    lib: './src/lib',
    "@": './src',
  },
  shim: {
    ELEMENT: {
      deps: ['vue', 'css!lib/element/element-ui.css'],
    }
  }
};

require.config(requireConfig);

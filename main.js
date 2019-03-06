define(function (require, exports, module) {
  const $ = require('jquery'); // 此处引入，全局可调用, $注册到全局
  const Vue = require('vue'); // 此处引入，其它处引入需引入
  const router = require('@/router/main');
  const store = require('@/store/main');
  const ELEMENT = require('ELEMENT');
  Vue.use(ELEMENT);
  const APP = new Vue({
    router,
    store,
    el: '#app',
    data: {
      name: '应急管理平台',
      activeIndex: '1',
      activeIndex2: '1'
    },
    methods: {

    }
  });
});


define(function (require, exports, module) {
  const store = require('@/store/main');
  const router = require('@/router/main');
  window.store = store;
  const APP = new Vue({
    router,
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


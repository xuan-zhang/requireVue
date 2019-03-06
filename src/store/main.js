define(function (require) {
  const Vue = require('vue');
  const Vuex = require('vuex');
  Vue.use(Vuex);
  const store = new Vuex.Store({
    state: {
      count: 0,
      name: '这个变量在Vuex store 中'
    },
    mutations: {
      increment (state) {
        state.count++
      }
    }
  });
  return store;
});

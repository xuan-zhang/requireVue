define(function () {
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

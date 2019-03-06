define(function (require, exports, module) {
  const routes = require('./routes').route;
  const Vue = require('vue');
  const VueRouter = require('vueRouter');
  Vue.use(VueRouter);
  const router = new VueRouter({
    routes,
    scrollBehavior: (to, from, savedPosition) => {
      if (savedPosition) {
        return savedPosition;
      }
      const position = {};
      if (to.hash) {
        position.selector = to.hash;
      }
      position.x = 0;
      position.y = 0;
      return position;
    },
  });
  return router;
});

define(function (require, exports, module) {
  const foo = require('@/views/foo/main');
  exports.route = [
    {
      path: '/foo',
      component: foo,
    },
    {
      path: '/bar',
      component: require('@/views/bar/main'),
    }
  ];
});

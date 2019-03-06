define(['vue', 'echarts',"text!@/views/foo/index.html", "css!@/views/foo/index.css"], function (Vue, echarts, template) {
  console.log('foo 页面使用echarts, 没有用 require 引入, 报错', echarts);
  return Vue.extend({
      template,
      data(){
        return {
          name: 'FOO页面',
          foo: '',
        }
      },
      methods: {
        fooClick(){
          $('#foo-click').click(function () {
            console.log('jQuery method click this button ,do not use require($)');
          });
          alert('you clicked foo');
        }
      }
    });
});

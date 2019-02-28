define([ "text!@/views/foo/index.html", "css!@/views/foo/index.css"], function (template) {
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
          alert('you clicked foo');
        }
      }
    });
});

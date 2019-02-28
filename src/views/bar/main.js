define(function (require, exports, module) {
  require('css!./index.css');
  const template = require('text!./index.html');
  return Vue.extend({
    el: '#bar',
    template,
    data(){
      return {
        name: '我是BAR',
      }
    }
  })
});

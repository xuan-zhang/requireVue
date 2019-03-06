define(function (require, exports, module) {
  require('css!./index.css');
  const echarts = require('echarts');
  console.log('echarts，不同于 jquery, 需要 require 引入',echarts);
  const Vue = require('vue');
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

import Vue from 'vue';
import Root from './root.vue';

new Vue({
  el: '#app-container',
  render(createElement) {
    return createElement(Root);
  },
});
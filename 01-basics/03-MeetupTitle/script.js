import Vue from './vendor/vue.esm.browser.js';

const buttons = [1, 2, 3, 4, 5];


const app = new Vue({
  el: '#app',
  data: {
    selecting: null,
    items: []
  },
  mounted: async function() {
    for (const v of buttons) {
      const result = await fetch(`https://course-vue.javascript.ru/api/meetups/${v}`).then((res) => res.json());
      this.items.push({ buttonNumber: v, courseName: result.title });
    }
  }
});

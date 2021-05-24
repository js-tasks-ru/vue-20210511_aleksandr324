import Vue from './vendor/vue.esm.browser.js';

const app = new Vue({
  el: '#app',
  data: {
    selecting: null,
    courseName: null
     },

  methods: {
    async selectResult() {
      const result = await fetch(`https://course-vue.javascript.ru/api/meetups/${this.selecting}`).then((res) => res.json());
      this.courseName = result.title;
    }
  },
  watch: {
    selecting() {
      this.selectResult();
    }
  }
});

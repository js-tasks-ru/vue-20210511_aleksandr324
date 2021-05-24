import Vue from "./vendor/vue.esm.browser.js";

// From https://jsonplaceholder.typicode.com/comments

const emails = [
  "Eliseo@gardner.biz",
  "Jayne_Kuhic@sydney.com",
  "Nikita@garfield.biz",
  "Lew@alysha.tv",
  "Hayden@althea.biz",
  "Presley.Mueller@myrl.com",
  "Dallas@ole.me",
  "Mallory_Kunze@marie.org",
  "Meghan_Littel@rene.us",
  "Carmen_Keeling@caroline.name",
  "Veronica_Goodwin@timmothy.net",
  "Oswald.Vandervort@leanne.org",
  "Kariane@jadyn.tv",
  "Nathan@solon.io",
  "Maynard.Hodkiewicz@roberta.com",
  "Christine@ayana.info",
  "Preston_Hudson@blaise.tv",
  "Vincenza_Klocko@albertha.name",
  "Madelynn.Gorczany@darion.biz",
  "Mariana_Orn@preston.org",
  "Noemie@marques.me",
  "Khalil@emile.co.uk",
  "Sophia@arianna.co.uk",
  "Jeffery@juwan.us",
  "Isaias_Kuhic@jarrett.net"
];


const app = new Vue({
  el: "#app",
  data: {
    search: '',
    items: []
  },

  mounted() {
    emails.forEach((email) =>
      this.items.push({ value: email, filtered: false })
    );
  },

  methods: {
    searchResult() {
      this.items.forEach(item =>
        item.filtered = this.search === "" ? false : item.value.toLowerCase().includes(this.search.toLowerCase()));
    }
  },
  watch: {
    search() {
      this.searchResult();
    }
  }
});

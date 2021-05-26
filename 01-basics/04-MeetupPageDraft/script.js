import Vue from "./vendor/vue.esm.browser.js";

/** URL адрес API */
const API_URL = "https://course-vue.javascript.ru/api";

/** ID митапа для примера; используйте его при получении митапа */
const MEETUP_ID = 6;

/**
 * Возвращает ссылку на изображение по идентификатору, например, изображение митапа
 * @param imageId {number} - идентификатор изображения
 * @return {string} - ссылка на изображение
 */
function getImageUrlByImageId(imageId) {
  return `${API_URL}/images/${imageId}`;
}

const fetchMeetups = () =>
  fetch(`${API_URL}/meetups/${MEETUP_ID}`).then((res) => res.json());

/**
 * Словарь заголовков по умолчанию для всех типов пунктов программы
 */
const agendaItemDefaultTitles = {
  registration: "Регистрация",
  opening: "Открытие",
  break: "Перерыв",
  coffee: "Coffee Break",
  closing: "Закрытие",
  afterparty: "Afterparty",
  talk: "Доклад",
  other: "Другое"
};

/**
 * Словарь иконок для для всех типов пунктов программы.
 * Соответствует имени иконок в директории /assets/icons
 */
const agendaItemIcons = {
  registration: "key",
  opening: "cal-sm",
  talk: "tv",
  break: "clock",
  coffee: "coffee",
  closing: "key",
  afterparty: "cal-sm",
  other: "cal-sm"
};


const app = new Vue({
  el: "#app",
  data: {
    meetapInfo: null,
    updatedInfo: null,
    agendaItemIcons,
    agendaItemDefaultTitles
  },
  computed: {
    getLocaleDate() {
      return this.meetapInfo.localeDate = new Date(this.meetapInfo.date).toLocaleString(navigator.language, {
        year: "numeric",
        month: "long",
        day: "numeric"
      });
    },
    getAgendaMode() {
      return this.meetapInfo.agenda = this.meetapInfo.agenda.map((agenda) => ({
        ...agenda,
        title: agenda.title !== null ? agenda.title : agendaItemDefaultTitles[agenda.type],
          }))
    }

  },
  mounted() {
    fetchMeetups().then((meetups) => {
      this.meetapInfo = meetups;
      this.meetapInfo.coverStyle = this.meetapInfo.imageId && { '--bg-url': `url(https://course-vue.javascript.ru/api/images/${this.meetapInfo.imageId})` };
    });

  }
});

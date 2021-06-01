// import meetup from "./__tests__/__fixtures__/meetup.json";

export default {
  name: 'MeetupInfo',

  props: {
    organizer: {
      type: String,
      required: true
    },
    place: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      required: true,
    }
  },

  computed: {
    dateTime() {
      return this.date ? new Date(this.date).toISOString().substr(0, 10) : '';
    },

    localeDate() {
      return this.date ? new Date(this.date).toLocaleString(navigator.language, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }) : '';
    }

  },

  template: `
    <ul class="info-list">
      <li>
        <img class="icon info-list__icon" alt="icon" src="/assets/icons/icon-user.svg" />
        {{ this.organizer }}
      </li>
      <li>
        <img class="icon info-list__icon" alt="icon" src="/assets/icons/icon-map.svg" />
        {{ this.place }}
      </li>
      <li>
        <img class="icon info-list__icon" alt="icon" src="/assets/icons/icon-cal-lg.svg" />
        <time :datetime="dateTime">{{ localeDate }}</time>
      </li>
    </ul>`,
};

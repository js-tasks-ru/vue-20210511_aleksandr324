import { agendaItemIcons, agendaItemDefaultTitles } from './data.js';


const MeetupAgendaItem = {
  name: 'MeetupAgendaItem',

  props: {
    agendaItem: {
      type: Object,
      required: true
    }
  },

  computed: {
    defaultTitles() {
      return agendaItemDefaultTitles;
    },

    iconsStyle() {
      return `../../assets/icons/icon-${agendaItemIcons[this.agendaItem.type]}.svg`;
    },
  },

  template: `
    <div class="meetup-agenda__item">
      <div class="meetup-agenda__item-col">
        <img class="icon" alt="icon" :src="iconsStyle" />
      </div>
      <div class="meetup-agenda__item-col">{{ agendaItem.startsAt }} - {{ agendaItem.endsAt }}</div>
      <div class="meetup-agenda__item-col">
        <h5 class="meetup-agenda__title">{{ agendaItem.title ? agendaItem.title : defaultTitles[agendaItem.type] }}</h5>
        <p v-if="agendaItem.type === 'talk'">
          <span>{{ agendaItem.speaker }}</span>
          <span class="meetup-agenda__dot"></span>
          <span class="meetup-agenda__lang">{{ agendaItem.language }}</span>
        </p>
        <p v-show="agendaItem.description !== null">{{ agendaItem.description }}</p>
      </div>
    </div>`,
};

export default MeetupAgendaItem;

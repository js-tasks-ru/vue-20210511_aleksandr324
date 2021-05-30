import MeetupAgendaItem from './MeetupAgendaItem.js';

const MeetupAgenda = {
  name: "MeetupAgenda",

  props: {
    agenda: {
      type: Array,
      required: true
    }
  },

  components: {
    MeetupAgendaItem,
  },


  template: `
    <div>
      <div v-for="agendaItem in agenda" class="meetup-agenda__item">
        <meetup-agenda-item :agenda-item="agendaItem"></meetup-agenda-item>
      </div>
    </div>`
};

export default MeetupAgenda;

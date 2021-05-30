import MeetupView from '../06-MeetupView/MeetupView.js';
import { MEETUP_ID, fetchMeetup } from './data.js';

const fetchMeetups = fetchMeetup(MEETUP_ID);

const MeetupPage = {
  name: 'MeetupPage',

  components: {
    MeetupView
  },

  data() {
    return {
      meetup: null
    }
  },

  async mounted() {
    this.meetup = await fetchMeetups;
  },

  template: `<div v-if="meetup" class="container">
  <meetup-view :meetup="meetup"/>
  </div>`,
};

export default MeetupPage;

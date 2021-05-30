import MeetupCover from '../03-MeetupCover/MeetupCover.js';
import MeetupDescription from '../02-MeetupDescription/MeetupDescription.js';
import MeetupAgenda from '../05-MeetupAgenda/MeetupAgenda.js';
import MeetupInfo from '../04-MeetupInfo/MeetupInfo.js';
import { getImageUrlByImageId } from './data.js';
import MeetupAgendaItem from '../05-MeetupAgenda/MeetupAgendaItem.js';

const MeetupView = {
  name: 'MeetupView',

  props: {
    meetup: {
      type: Object,
      required: true
    }
  },

  components: {
    MeetupAgendaItem,
    MeetupInfo,
    MeetupAgenda,
    MeetupDescription,
    MeetupCover
  },

  data() {
    return {
      url: getImageUrlByImageId(this.meetup.imageId)
    }
    },


  template: `
    <div>
    <meetup-cover :link="url" :title="meetup.title"/>
      <div class="container">
        <div class="meetup">
          <div class="meetup__content">
            <h3>Описание</h3>
            <meetup-description :description="meetup.description" />
            <h3>Программа</h3>
            <meetup-agenda :agenda="meetup.agenda" />
          </div>
          <div class="meetup__aside">
            <meetup-info :organizer="meetup.organizer" :place="meetup.place" :date="meetup.date"/>
          </div>
        </div>
      </div>
    </div>`,
};

export default MeetupView;

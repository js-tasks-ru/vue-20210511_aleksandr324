const MeetupDescription = {
  name: 'MeetupDescription',

  props: {
    description: {
      type: String
    },
  },

  template: `<p class="meetup-description">{{ this.description }}</p>`,
};

export default MeetupDescription;

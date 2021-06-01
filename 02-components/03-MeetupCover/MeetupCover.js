const MeetupCover = {
  name: 'MeetupCover',

  props: {
    link: {
      type: String
    },
    title: {
      type: String
    }
  },

  template: `
    <div class="meetup-cover" :style=" link && { '--bg-url': \`url('\${link}')\` }">
    <h1 class="meetup-cover__title">{{ this.title }}</h1>
    </div>`,
};

export default MeetupCover;

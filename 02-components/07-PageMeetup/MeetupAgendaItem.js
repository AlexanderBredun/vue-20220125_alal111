import { defineComponent } from './vendor/vue.esm-browser.js';
import { agendaItemIcons, agendaItemDefaultTitles } from './meetupService.js';

export default defineComponent({
  name: 'MeetupAgendaItem',
  props: {
    agendaItem: {
      required: true
    }
  },
  data(){
    return {
      agendaItemIcons,
      agendaItemDefaultTitles
    }
  },

  template: `
    <div class="agenda-item">
      <div class="agenda-item__col">
        <img :src="'/assets/icons/icon-' + agendaItemIcons[agendaItem.type] + '.svg'" class="icon" :alt="agendaItemIcons[agendaItem.type]" />
      </div>
      <div class="agenda-item__col">{{ agendaItem.startsAt }} - {{ agendaItem.endsAt }}</div>
      <div class="agenda-item__col">
        <h3 class="agenda-item__title">{{ agendaItem.title || agendaItemDefaultTitles[agendaItem.type] }}</h3>
        <p class="agenda-item__talk" v-if="agendaItem.type === 'talk'">
          <span>{{ agendaItem.speaker }}</span>
          <span class="agenda-item__dot"></span>
          <span class="agenda-item__lang">{{ agendaItem.language }}</span>
        </p>
        <p v-if="agendaItem.description">{{ agendaItem.description }}</p>
      </div>
    </div>`,
});
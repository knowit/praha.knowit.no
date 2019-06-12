const villages = [];

const year = '2019';
const season = {
  short: 'høst',
  shortCapitalized: 'Høst',
  long: 'høsten',
  longCapitalized: 'Høsten',
};
const startDate = '18. oktober';
const endDate = '21. oktober';

export const eventData = {
  date: `${startDate} - ${endDate} ${year}`,
  longDate: `${startDate} - ${endDate} ${year}`,
  venue: 'Hotel Grandior',
  adress: 'Na Poříčí, Florenc, Praha 1-Florenc-Praha 1',
  city: 'Praha',
  country: 'Tsjekkia',
  year,
  season,
  startDate,
  endDate,
  cities: [
    'Berlin',
    'Istanbul',
    'Madrid',
    'Dublin',
    'Svalbard',
    'Reykjavik',
    'Palma',
    'Ljubljana',
    'Strømstad',
  ],
};

const viewmodel = {
  title: `Fagseminar ${eventData.season.longCapitalized} ${eventData.year}`,
  event: {
    ...eventData,
    gmapsUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14415.927845052565!2d14.432631060963283!3d50.082471035905606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b94be2dfe00a7%3A0x723fd65dc8481081!2sGrandior+Hotel+Prague!5e0!3m2!1sno!2sno!4v1558968128473!5m2!1sno!2sno',
  },
  meta: {
    title: `Knowit Objectnet Fagseminar ${eventData.year}`,
    description: `Knowit Objectnet arrangerer to fagseminarer årlig. Det er de ansatte selv som lager programmet. ${
      season.longCapitalized
    } ${year} vil den bli avholdt ${eventData.date} i ${eventData.city}, ${
      eventData.country
    }.`,
    keywords: `Fagseminar, ${eventData.city}, ${
      eventData.country
    }, Fag, Foredrag`,
  },
  schedules: [
    {
      date: '18',
      day: `Fredag ${eventData.startDate}`,
      collections: [
        {
          time: '19:00',
          title: '1 Fly fra Oslo Lufthavn',
        },
        {
          time: '19:25',
          title: '2 Fly fra Oslo Lufthavn',
        },
      ],
    },
    {
      date: '19',
      day: 'Lørdag 19. Oktober',
      collections: [
        {
          time: '06:30-09:00',
          title: 'Frokost',
        },
        {
          time: '09:00-17:00',
          title: 'Heldagskonferanse',
        },
        {
          time: '19:00',
          title: 'Middag',
        },
      ],
    },
    {
      date: '20',
      day: 'Søndag 20. Oktober',
      collections: [
        {
          time: '06:30-09:00',
          title: 'Frokost',
        },
        {
          time: '09:00-13:00',
          title: 'Heldagskonferanse',
        },
        {
          time: '13:00-18:00',
          title: 'Fritid',
        },
        {
          time: '18:00',
          title: 'Middag',
        },
      ],
    },
    {
      date: '21',
      day: `Mandag ${eventData.endDate}`,
      collections: [
        {
          time: '06:30-09:00',
          title: 'Frokost',
        },
        {
          time: '09:00-15:30',
          title: 'Aktiviteter',
        },
        {
          time: '17:00',
          title: 'Fly til Oslo Lufthavn',
        },
      ],
    },
  ],
  talks: {
    internmeet: {
      title: 'Velkommen til fagseminar (... og kort internmøte)!',
      description:
        'Jan Henrik ønsker velkommen til fagseminar. Linn forteller om Genus-prosjektet. Christer om Objectnet sine prioriteringer første halvår 2019, før hver village får et minutt hver til å reklamere for seg selv.',
      speakers: [],
      type: 'Talks,',
    },
    mobility: {
      title: 'Mobilitet og smarte byer!',
      type: 'Talk',
      description:
        'Erik N forteller om et av våre satsningsområder: Mobilitet! Hva ligger i mobilitet? Hvorfor skal vi drive med det? Og hva er smarte byer?',
    },
  },
  villages: [],
};

export default viewmodel;

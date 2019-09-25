export const villages = [];

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
  monthNumber: 10,
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
    description: `Knowit Objectnet arrangerer to fagseminarer årlig. Det er de ansatte selv som lager programmet. ${season.longCapitalized} ${year} vil den bli avholdt ${eventData.date} i ${eventData.city}, ${eventData.country}.`,
    keywords: `Fagseminar, ${eventData.city}, ${eventData.country}, Fag, Foredrag`,
  },
  days: [
    {
      date: '18',
      label: 'Fredag 18.10',
    },
    {
      date: '19',
      label: 'Lørdag 19.10',
    },
    {
      date: '20',
      label: 'Søndag 20.10',
    },
    {
      date: '21',
      label: 'Mandag 21.10',
    },
  ],
  schedules: [],
  talks: {},
  villages: [],
};

export default viewmodel;

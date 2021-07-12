const personal = {
  name: 'Jewgienij',
  lastname: 'Brzozowski',
  image: 'jb.png',
  birth : '11-09-1985',
  birthPlace : 'Pietropawłowsk',
  address : 'Starowiejska 18',
  city : 'Mysłakowice',
  zip : '58-533',
  phone : '+48 883 475 410',
  email : 'partygrouppl@gmail.com',
  github: 'https://github.com/stiffelbo',
  linkedIn: 'https://pl.linkedin.com/in/jewgienij-brzozowski-613083147',
  occupation : 'Junior Web Developer',
  relocation: 'preferowana praca zdalna lub stacjonarna częsciowo (50/50)',
};

const about = [
  'otwarty na ludzi oraz wiedze', 'konsekwenty', 'umiejący podjąć decyzje', 'nastawiony na ciagłe doskonalenie',
];

const technologies = {
  displayLevel: false,
  content :
    [
      {
        name: 'HTML',
        level: 4,
      },
      {
        name: 'CSS / Sass',
        level: 4,
      },
      {
        name: 'Javascript / Node JS',
        level: 3.5,
      },
      {
        name: 'React',
        level: 3.5,
      },
      {
        name: 'PHP',
        level: 3,
      },
      {
        name: 'Python',
        level: 3,
      },
      {
        name: 'Mongo DB',
        level: 3,
      },
      {
        name: 'MySQL',
        level: 4,
      },
      {
        name: 'Git',
        level: 4,
      },
      {
        name: 'ASANA',
        level: 4,
      },
      {
        name: 'JIRA',
        level: 4,
      },
    ],
}

;

const tools = [
  {
    name: 'ASANA',
    level: 4.5,
  },
  {
    name: 'JIRA',
    level: 4.5,
  },
  {
    name: 'Google docs',
    level: 4,
  },
];

const courses = [
  {
    name: 'Web Developer Plus',
    years: '2020.11 - 2021.8',
    school: 'Kodilla',
    summary: [
      'Poznanie i praktyka technologii ze stosu MERN', 'Udział w projekcie grupowym, praktyka Git (branch, konflikty, PR, merge)',
    ],
  },
  {
    name: 'SQL - MySQL for Data Analytics and Business Intelligence',
    years: '2020.7 - 2020.8',
    school: 'Udemy',
    summary: [
      'Teoria MySQL.', 'Tworzenie baz danych, tabel, kluczy oraz ograniczeń', 'Operacje CRUD wraz z JOIN i agregacją', 'Podstawy funkcji oraz procedur',
    ],
  },
  {
    name: 'Programowanie w języku Python - od A do Z - 2021',
    years: '2019.11 - 2020.2',
    school: 'Udemy',
    summary: [
      'Pierwszy samodzielny kurs programowania', 'Warunki, pętle, działania na listach i słownikach, funkcje', 'Operacje na plikach CSV/XLS',
    ],
  },
];

const education = [
  {
    years: '2015-2011',
    school: 'Uniwersytet Ekonomiczny we Wrocławiu',
    course: 'Zarządzanie, logistyka menedżerska',
  },
  {
    years: '2004-2009',
    school: 'Uniwersytet Wrocławski we Wrocławiu',
    course: 'Prawo',
  },
  {
    years: '2000-2004',
    school: 'II L.O. im C.K. Norwida w Jeleniej Górze',
    course: 'Informatyka, j. Angielski, Rosyjski',
  },
];

const experience = [
  {
    years: '2018 - obecnie',
    company: 'Szymon Kurowski Sp z o.o.',
    role: 'Kierownik działu uszlachetnienia monet',
    summary: [
      'Analiza procesów produkcyjnych i zarządczych', 'Rozwój apikacji webowej opartej o bazę MySQL, PHP 7 oraz Javascipt', 'Budowa i wdrożenie modułu zbierania danych produkcyjnych oraz kontroli jakości.',
    ],
  },
  {
    years: '2017 - 2018',
    company: 'Sig Sp z o.o.',
    role: 'Sprzedawca wewnętrzny / koordynator',
    summary: [
      'Praca na ERP IFS',
    ],
  },
  {
    years: '2015 - 2017',
    company: 'Kurowski Group Sp z o.o.',
    role: 'Koordynator Projektów',
    summary: ['Poznanie systemów ASANA oraz JIRA',
      'Praca w języku Angielskim',
    ],
  },
  {
    years: '2005 - 2020',
    company: 'Freelance',
    role: 'Dj / Konferansjer',
    summary: [
      'Programowanie sterowników oświetlania DMX', 'Obsługa nagłośnień PA',
    ],
  },
];

const languages = [
  {
    name: 'Angielski',
    level: 'C1',
  },
  {
    name: 'Rosyjski',
    level: 'C1',
  },
];

const interests = [
  'Algo Trading', 'Blockchain', 'Snowboard', 'Żonglerka',
];

const clausule = 'Wyrażam zgodę na przetwarzanie danych osobowych zawartych w niniejszym dokumencie do realizacji procesu rekrutacji zgodnie z ustawą z dnia 10 maja 2018 roku o ochronie danych osobowych (Dz. Ustaw z 2018, poz. 1000) oraz zgodnie z Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (RODO).';


const initialStoreData = {
  personal: {...personal},
  about: [...about],
  technologies: {...technologies},
  tools: [...tools],
  courses: [...courses],
  education: [...education],
  experience: [...experience],
  languages: [...languages],
  interests: [...interests],
  clausule: clausule,
};

export default initialStoreData;

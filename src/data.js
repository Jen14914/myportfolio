// All portfolio content lives here. Edit this file; the UI reads from it.
// Items marked TODO are things I did not have, so fill them in.
//
// Each item has `roles`: which view(s) it appears in.
//   'engineer' = software engineer view, 'support' = systems support view.

export const profile = {
  name: 'Puisetso Jendral Maluke',
  title: 'Software engineer and systems support officer',
  location: 'Lesotho',
  taglines: {
    all: 'I build health information software and keep the systems a district depends on running.',
    engineer: 'I build web software for public health, from the database to the dashboard.',
    support: 'I keep district health systems running and train the people who use them.',
  },
  heroChips: {
    all: ['DHIS2', 'eLMIS', 'eRegister', 'FastAPI', 'React'],
    engineer: ['Python', 'FastAPI', 'React', 'PostgreSQL', 'Docker', 'Git'],
    support: ['DHIS2', 'eLMIS', 'eRegister', 'iHRIS'],
  },
  about: [
    'I work where health and software meet in Lesotho. I am the Systems Support Officer at the Qacha\u2019s Nek District Health Management Team, Ministry of Health. I look after the health information platforms used across the district (DHIS2, eLMIS, eRegister and iHRIS) and train the people who use them.',
    'I also build software. My main project is the Lesotho National Health Surveillance Platform, a full-stack web application that is also the subject of my MSc dissertation at Botho University.',
  ],
  helpWith: [
    { text: 'Set up, train and support teams on health information systems', roles: ['support'] },
    { text: 'Manage user accounts and access for health facilities', roles: ['support'] },
    { text: 'Write clear field reports and technical documents', roles: ['support', 'engineer'] },
    { text: 'Build web applications and APIs for health data', roles: ['engineer'] },
    { text: 'Deploy and troubleshoot systems with Docker and Linux', roles: ['engineer', 'support'] },
  ],
};

export const contact = {
  email: 'puisetsomaluke@gmail.com', // TODO: your email address
  github: 'https://github.com/Jen14914',
  linkedin: 'www.linkedin.com/in/puisetso-maluke-50ab8269', // TODO: your LinkedIn URL
  whatsapp: '+26657130660', // TODO: number in international format, digits only
  cvUrl: 'https://drive.google.com/file/d/1UuSbUmC1hur7fWsVPuTj5I8x90sYm508/view?usp=drive_link', // TODO: link to your CV (PDF) so the "Download CV" button appears
};

export const experience = [
  {
    id: 'dhmt',
    title: 'Systems Support Officer',
    org: 'Qacha\u2019s Nek District Health Management Team, Ministry of Health',
    period: 'Current role', // TODO: add start year, e.g. '2022 to present'
    roles: ['support'],
    points: [
      'Provide ICT support to every health centre in the district, including site visits.',
      'Run systems training for health workers on DHIS2, eLMIS, eRegister and iHRIS.',
      'Manage domain accounts and user access.',
      'Maintain and support the health information platforms used across the district.',
      'Write field reports from raw notes and escalate technical faults to development teams.',
    ],
  },
  {
    id: 'lnhsp-dev',
    title: 'Developer, Lesotho National Health Surveillance Platform',
    org: 'MSc research project, Botho University',
    period: 'In progress',
    roles: ['engineer'],
    points: [
      'Designed and built the platform end to end: FastAPI backend, React frontend, JWT authentication.',
      'Deployed the API on Render and the web app on Vercel, and fixed the CORS, Python version and SPA routing problems that came with it.',
      'Following Design Science Research methodology for the dissertation.',
    ],
  },
];

export const projects = [
  {
    id: 'lnhsp',
    title: 'Lesotho National Health Surveillance Platform',
    status: 'In development',
    primary: 'engineer',
    roles: ['engineer'],
    summary: 'A web platform for disease surveillance in Lesotho, and the subject of my MSc dissertation.',
    points: [
      'Admin dashboard with JWT login and separate admin and editor roles.',
      'Disease A to Z reference pages backed by seeded disease and district data.',
      'Responsive interface with a Publications menu.',
    ],
    tags: ['FastAPI', 'Python', 'SQLAlchemy', 'SQLite', 'React', 'Vite', 'JWT', 'Render', 'Vercel'],
    link: { label: 'View code on GitHub', url: 'https://github.com/Jen14914' },
  },
  {
    id: 'healthwatch',
    title: 'HealthWatch',
    status: 'Prototype',
    primary: 'engineer',
    roles: ['engineer'],
    summary: 'An earlier exploration of a national health surveillance system that led to the current platform.',
    points: [
      'PostgreSQL and PostGIS schema for health and location data.',
      'FastAPI backend with a multi-page responsive frontend.',
    ],
    tags: ['PostgreSQL', 'PostGIS', 'FastAPI', 'JavaScript'],
  },
  {
    id: 'elmis-field',
    title: 'eLMIS training and support in health facilities',
    status: 'Ongoing',
    primary: 'support',
    roles: ['support'],
    summary: 'Hands-on training and troubleshooting for OpenLMIS (eLMIS) at facilities across the district.',
    points: [
      'Trained pharmacy, store and clinic staff at their own service points.',
      'Documented recurring problems: incomplete requisition workflows, product and program setup, duplicate product codes, user account configuration and poor connectivity.',
      'Escalated system faults to the development team with clear write-ups.',
    ],
    tags: ['OpenLMIS', 'eLMIS', 'Training', 'Reporting'],
  },
  {
    id: 'local-elmis',
    title: 'Local eLMIS test instance',
    status: 'Working',
    primary: 'engineer',
    roles: ['engineer', 'support'],
    summary: 'A local copy of the Lesotho eLMIS distribution for testing and diagnosis.',
    points: [
      'Deployed with Docker Compose on a Linux laptop.',
      'Worked through container naming and PostgreSQL diagnostics.',
    ],
    tags: ['Docker Compose', 'Linux', 'PostgreSQL', 'OpenLMIS'],
  },
  {
    id: 'district-ict',
    title: 'District health ICT support',
    status: 'Ongoing',
    primary: 'support',
    roles: ['support'],
    summary: 'Day-to-day support for the systems that health centres rely on.',
    points: [
      'Domain account management and computer literacy training.',
      'Support for DHIS2, eRegister and iHRIS users.',
      'Notices to facilities about network disruptions.',
    ],
    tags: ['DHIS2', 'eRegister', 'iHRIS', 'Domain accounts'],
  },
];

export const skillGroups = [
  {
    title: 'Software engineering',
    roles: ['engineer'],
    items: ['Python', 'FastAPI', 'SQLAlchemy', 'JavaScript', 'React', 'Vite', 'PostgreSQL', 'PostGIS', 'SQLite', 'JWT authentication', 'REST APIs', 'Git and GitHub'],
  },
  {
    title: 'Deployment and infrastructure',
    roles: ['engineer', 'support'],
    items: ['Docker Compose', 'Linux', 'Render', 'Vercel', 'Network troubleshooting'],
  },
  {
    title: 'Health information systems',
    roles: ['support', 'engineer'],
    items: ['DHIS2', 'OpenLMIS / eLMIS', 'eRegister', 'iHRIS'],
  },
  {
    title: 'Systems support',
    roles: ['support'],
    items: ['Domain account management', 'User training', 'Computer literacy training', 'Site visits', 'Troubleshooting', 'Technical documentation', 'Report writing'],
  },
];

export const education = [
  {
    id: 'msc',
    title: 'MSc in Computer Science',
    org: 'Botho University, Faculty of Technology and Engineering, Department of Computing',
    period: 'In progress',
    note: 'Dissertation on the Lesotho National Health Surveillance Platform, using Design Science Research.',
  },
  // TODO: add your earlier degree(s), diplomas and certifications here.
  // { id: 'bsc', title: '...', org: '...', period: '...', note: '' },
];

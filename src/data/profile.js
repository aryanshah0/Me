// Single source of truth for the portfolio's content. Pages and components
// render from here, so updating a job or project is a one-place edit.

import hostelImg from '../assets/images/hostel.webp'
import airbnbImg from '../assets/images/airbnb.webp'
import dalleImg from '../assets/images/dalle.webp'
import threadsImg from '../assets/images/threads.webp'
import certGithub from '../assets/images/cert-github.webp'
import certMongodb from '../assets/images/cert-mongodb.webp'
import certPostman from '../assets/images/cert-postman.webp'
import certMetaReact from '../assets/images/cert-meta-react.webp'
import certMetaHtmlCss from '../assets/images/cert-meta-htmlcss.webp'

export const SITE_URL = 'https://aryan-shah.vercel.app'
export const RESUME_URL = '/aryan-shah-resume.pdf'
export const EMAIL = 'aryanwork10@gmail.com'

export const HEADLINE = 'Full-stack engineer building cloud infrastructure'

export const SUMMARY =
  'I’m Aryan Shah, an Associate Software Engineer at E2E Cloud in Delhi. I build the consoles people use to run GPU and cloud infrastructure: VM auto scaling, machine images, compute provisioning, load balancers and the sign-in flows in front of them.'

export const SOCIALS = [
  { name: 'GitHub', href: 'https://github.com/aryanshah0' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/4ryanshah/' },
  { name: 'X (Twitter)', href: 'https://x.com/4ryanshah' },
]

export const EXPERIENCE = [
  {
    role: 'Associate Software Engineer',
    org: 'E2E Cloud',
    href: 'https://www.e2enetworks.com',
    period: 'Dec 2025 – Present',
    location: 'Delhi, India',
    points: [
      'Built VM Auto Scaling and VM Images for the TIR GPU/AI cloud console, from scaling schedules and load balancer attachment to image-based launch and restore.',
      'Own the VM and Notebooks sections of TIR, plus CI quality: SonarQube, a coverage gate and stable Playwright tests.',
    ],
  },
  {
    role: 'Software Engineer Intern',
    org: 'E2E Cloud',
    href: 'https://www.e2enetworks.com',
    period: 'May 2025 – Nov 2025',
    location: 'Delhi, India',
    points: [
      'Owned the E2E Marketplace frontend end to end: design system, billing and KYC flows, E2E tests and monitoring.',
      'Built compute provisioning in the Angular MyAccount console and rebuilt its sign-up with OTP and social login.',
    ],
  },
  {
    role: 'Software Engineer Intern',
    org: 'Hook Daily',
    href: 'https://in.linkedin.com/company/volta-industries-llp',
    period: 'Jun 2024 – Aug 2024',
    location: 'Mumbai, India',
    points: [
      'Built a real-time e-cycle tracking app (speed, distance, battery) and an e-commerce site with an admin panel for e-cycle kits.',
    ],
  },
  {
    role: 'Lab Teaching Assistant, DSA & DAA',
    org: 'LNMIIT',
    href: 'https://lnmiit.ac.in',
    period: 'Jan 2024 – Nov 2024',
    location: 'Jaipur, India',
    points: ['Taught two semesters of data structures and algorithms labs, from linked lists and trees to dynamic programming and graphs.'],
  },
]

export const EDUCATION = [
  {
    role: 'B.Tech, Computer Science and Engineering',
    org: 'LNMIIT',
    href: 'https://lnmiit.ac.in',
    period: '2021 – 2025',
    location: 'Jaipur, India',
    points: ['Coursework in data structures, algorithms, operating systems and database systems.'],
  },
  {
    role: 'Higher Secondary (Science, PCM)',
    org: 'SSSV',
    href: 'https://sssvjam.org',
    period: '2019 – 2021',
    location: 'Jamnagar, India',
    points: ['Physics, Chemistry and Mathematics.'],
  },
]

// Product-first: what I've shipped at E2E, shown on the projects page ahead of side
// projects. Each links to the live product (the code itself is private).
export const WORK_HIGHLIGHTS = [
  {
    title: 'VM Auto Scaling',
    product: 'TIR · GPU/AI cloud',
    href: 'https://tir.e2enetworks.com/',
    description: 'Scaling groups with schedules, an activity timeline and load balancer attachment, from creation to day-2 editing.',
  },
  {
    title: 'VM Images',
    product: 'TIR · GPU/AI cloud',
    href: 'https://tir.e2enetworks.com/',
    description: 'Capture a VM as an image, launch fleets from it, or roll a VM back to a known-good state.',
  },
  {
    title: 'E2E Marketplace',
    product: 'GPU cloud console',
    href: 'https://marketplace.e2enetworks.com/',
    description: 'A micro-frontend I owned end to end: design system, billing and KYC flows, E2E tests and error monitoring.',
  },
  {
    title: 'Compute & sign-in',
    product: 'MyAccount console',
    href: 'https://myaccount.e2enetworks.com/',
    description: 'Compute node provisioning, a multi-VM create wizard, and a rebuilt sign-up with SMS/voice OTP and social login.',
  },
]

export const PROJECTS = [
  {
    title: 'Hostel Management & Complaint System',
    featured: true,
    description:
      'A role-based platform for running a college hostel. Admins manage hostels, rooms and staff; wardens allocate rooms; students raise and track complaints through to resolution.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT auth'],
    image: hostelImg,
    imageAlt: 'Hostel Management System home page',
    live: 'https://hostel-management-frontend-plum.vercel.app',
    github: 'https://github.com/Fast5/Hostel-Management-Frontend',
  },
  {
    title: 'Airbnb Clone',
    description: 'List places with photo uploads, browse listings and book stays by date. Supports email and Google sign-in.',
    stack: ['React', 'Express', 'MongoDB', 'Cloudinary', 'Google OAuth'],
    image: airbnbImg,
    imageAlt: 'Airbnb clone listings page',
    live: 'https://airbnb-clone-frontend-mocha.vercel.app',
    github: 'https://github.com/aryanshah0/Airbnb-clone_Frontend',
  },
  {
    title: 'DALL·E Clone',
    description: 'Generate images from text prompts with the OpenAI Images API, then share them to a community showcase or download them.',
    stack: ['React', 'Express', 'OpenAI API', 'Cloudinary', 'MongoDB'],
    image: dalleImg,
    imageAlt: 'DALL·E clone community showcase',
    live: 'https://resilient-croissant-511a94.netlify.app',
    github: 'https://github.com/aryanshah0/Dall-E-Clone_Frontend',
  },
  {
    title: 'Threads Clone',
    description: 'A Threads-style social app with sign-up, profiles with image upload, posts and replies.',
    stack: ['React', 'Chakra UI', 'Recoil', 'Vite'],
    image: threadsImg,
    imageAlt: 'Threads clone profile page',
    github: 'https://github.com/aryanshah0/Threads-Frontend',
  },
]

// Skills bubbles, inner ring to outer ring: core stack in the middle.
export const SKILL_RINGS = [
  // Inner ring: backend, closest to the "Full-stack" hub.
  ['Node.js', 'Express', 'Django', 'Python', 'MongoDB', 'REST APIs', 'Postman'],
  ['React', 'TypeScript', 'Angular', 'Redux Toolkit', 'JavaScript', 'Mongoose', 'JWT auth', 'OAuth', 'Firebase'],
  ['Appwrite', 'Cloudinary', 'SQL', 'Playwright', 'Vitest', 'Docker', 'GitLab CI', 'Git', 'Sentry', 'PostHog', 'Tailwind'],
]

export const CERTIFICATIONS = [
  {
    name: 'MongoDB Certified Associate Developer',
    image: certMongodb,
    href: 'https://www.credly.com/badges/3addee50-5cb2-4735-9b29-37f5f2235657/linked_in_profile',
  },
  {
    name: 'GitHub Foundations',
    image: certGithub,
    href: 'https://www.credly.com/badges/630a804c-4fb6-4bc6-86be-552614d370f3/linked_in_profile',
  },
  {
    name: 'Postman API Fundamentals Student Expert',
    image: certPostman,
    href: 'https://badges.parchment.com/public/assertions/fVaPj58FRASVZJbArkc-NA',
  },
  { name: 'Meta Advanced React', image: certMetaReact, href: 'https://www.coursera.org/account/accomplishments/records/XXENGQZ54P8Q' },
  {
    name: 'Meta HTML and CSS in Depth',
    image: certMetaHtmlCss,
    href: 'https://www.coursera.org/account/accomplishments/records/L6SPTP6LUHRL',
  },
]

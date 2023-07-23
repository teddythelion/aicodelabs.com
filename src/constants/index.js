import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Collect data",
    content: "Gather all Data, including competitors.",
    icon: web,
  },
  {
    title: "Organize Data",
    content: "Format data so it makes sense.",
    icon: mobile,
  },
  {
    title: "Statistcal Comparisons",
    content: "Use stats to make connections.",
    icon: backend,
  },
  {
    title: "Analyze Impliment",
    content: "Create action plans based on Data.",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Analyze Competitors",
    company_name: "Strength Weaknesses Opportunities and Threats",
    icon: starbucks,
    iconBg: "#383E56",
    date: "First Step",
    points: [
      "The first step when taking on a new client, after introductions and formalities, is to is to thoroughly examine their competitors. ",       
       "This involves researching and studying the top competitors in the client's industry.",
       "The skill in this is knowing exctly what data to go after and where to get it",
        "Overall you mainly want to understand their client acquistion strategies, their operational strengths and weaknesses, and market positioning.",
    ],
  },
  {
    title: "Utilize Competitor Data as a Lens",
    company_name: "Make Comparisons",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Second Step",
    points: [
      "Once the competitor analysis is complete, the next step is to leverage the gathered data",
      "We use this data as a lens to view the client's business. ",
      "By comparing the client's offerings, market position, and performance against the competitors, you can gain valuable insights",
      "This ultimately leads deep insights and it helps to identify areas for improvement.",
    ],
  },
  {
    title: "Data Processing",
    company_name: "Make correlations and connections",
    icon: shopify,
    iconBg: "#383E56",
    date: "Third Step",
    points: [
       "Next we employ AI for Data Processing",
        "In the third step, an AI system is employed to process the vast amount of data collected",
        "This data comes from the competitor analysis and the client's own business.",
        " The AI system, capable of handling several gigabytes of data, assists in identifying patterns, trends, and correlations",
        "These are correlations that may not be readily apparent to humans due to the data's complexity and volume.",
    ],
  },
  {
    title: "Impliment Actionable Processes",
    company_name: "Make data work",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Fourth Step",
    points: [
      "Then we Develop a Comprehensive Plan of Action",
     " Based on the connections and comparisons facilitated by the AI system, the fourth step involves developing a comprehensive plan",
     "This a real actionable plan of action for the client with goals and processes.",
     " This plan incorporates the insights gained from the competitor analysis, the client's unique strengths, and the AI-generated recommendations.",
     " The plan outlines specific strategies, tactics, and milestones that will help the client achieve their goals and gain a competitive edge in their industry.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "\"Success in creating AI would be the biggest event in human history. It will revolutionize the way in which we exist. I cant wait to see.\"  ",
    name: "Stephen Hawking ",
    designation: "Theoretical Physicist",
    company: "Cambridge",
    image: "https://digitalionmedia.com",
  },
  {
    testimonial:
      "\"I imagine a world in which AI is going to make us work more productively, live longer, and have cleaner energy.\" ",
    name: "Sam Altman",
    designation: "Chairman",
    company: "OpenAI",
    image: "https://digitalionmedia.com",
  },
  {
    testimonial:
      "\"The promise of artificial intelligence and computer science generally vastly outweighs the impact it could have on jobs!\" ",
    name: "Paul Allen",
    designation: "Co-Founder",
    company: "Microsoft",
    image: "https://digitalionmedia.com",
  },
];

const projects = [
  {
    name: "ClassTactics.com",
    description:"This is an app I created to aid students with educational issues. It essentially walks a person through a series of prompting that will enable a novice or someone inept in the ways of AI to construct a promting schema. It walks you through each critical step of the sometimes overly complicated prompt process.",
      
    tags: [
      {
        name: "Education",
        color: "blue-text-gradient",
      },
      {
        name: "LevelPlayingfield",
        color: "green-text-gradient",
      },
      {
        name: "Research",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://ClassTactics.com",
  },
  {
    name: "Title Sets up Deep Search",
    description:
      "Initially the the app will need a title so to speak, or more accurately a subject. This initializes the AI to start gathereing a broad data set which takes time and breaks the prompting process into parts. This sort of eliminates the need for storing lenghty answers in a data base for context on the next query. This is the best practice",
    tags: [
      {
        name: "AI-Language",
        color: "blue-text-gradient",
      },
      {
        name: "OpenAI",
        color: "green-text-gradient",
      },
      {
        name: "Accuracy",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://ClassTactics.com",
  },
  {
    name: "Prompt Engineering",
    description:
      "Educational information especially from established institutions must have a high level of accuracy. What ClassTactics does is turn the average person into a prompt engineer for a high level of granular accuracy. This is pivitol when looking up test questions and graded work. ChatGPT will give vague even wrong answers.",
    tags: [
      {
        name: "prompts",
        color: "blue-text-gradient",
      },
      {
        name: "AI",
        color: "green-text-gradient",
      },
      {
        name: "accuracy",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://ClassTactics.com",
  },
];

export { services, technologies, experiences, testimonials, projects };

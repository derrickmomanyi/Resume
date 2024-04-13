import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Derrick Momanyi",
  initials: "DM",
  location: "Nairobi, Kenya, GMT+3",
  locationLink: "https://maps.app.goo.gl/o7TFRdL8StmcfQTE7",
  about:
    "I am a diligent and detail-oriented Full Stack Software Engineer dedicated to crafting exceptional digital products that deliver outstanding user experiences. With a robust background in software development and a passion for creating innovative solutions, I thrive in dynamic environments where I can leverage my technical expertise to tackle complex challenges.",
  summary:
    "I'm an adept Full Stack Engineer with a successful track record of leading teams and launching products using PHP Laravel, React, Vue.js, JavaScript, Ruby on Rails, and Node.js. As a recent graduate in Software Engineering, I'm dedicated to continuous learning in this dynamic field. I thrive in collaborative environments, leveraging technology to deliver impactful solutions that meet business needs and user expectations.",
  avatarUrl: "", //look for a nice image
  personalWebsiteUrl: "",
  contact: {
    email: "hellomomanyi@gmail.com",
    tel: "+254703528403",
  social: [
      {
        name: "GitHub",
        url: "https://github.com/derrickmomanyi",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "www.linkedin.com/in/derrickmomanyi",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/guylikericky",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Moringa School",
      degree: "Software Development (HTML, CSS, MySQL, Postgresql, React JS, Ruby, Ruby on Rails)",
      start: "2022",
      end: "2023",
    },
    {
      school: "FreeCodeCamp.org(Online Course)",
      degree: "Full Stack Web Development (HTML and CSS, Javascript, Object Oriented and Functional Programming, responsive design with Tailwind and Bootstrap",
      start: "2020",
      end: "2021",
    }

  ],
  work: [
    {
      company: "Zynamis",
      link: "https://zynamis.co.ke",
      badges: ["Remote, In Office"],
      title: "Junior Full Stack Developer",
      logo: ParabolLogo,
      start: "2023",
      end: "present",
      description:
        "Implemented new features, led squad, worked on improving the way developers ship the code, started migration from Bootstrap to Tailwind CSS and more. Technologies: React, Laravel, Vue JS",
    }
  ],
  skills: [
    "JavaScript",
    "React",
    "React Js",
    "Node.js",
    "PHP Laravel",
    "Vue JS",
    "Next JS"
  ],
  projects: [
    {
      title: "Hazi",
      techStack: [
        "Bootstrap",
        "Laravel",
        "JQuery",        
      ],
      description: "Hazi is a bulk communication tool, the all-in-one communication platform.",
      logo: ConsultlyLogo,
      link: {
        label: "hazi.co.ke/",
        href: "https://hazi.co.ke/",
      },
    },
    {
      title: "Tuni",
      techStack: ["Vue JS", "Tailwind", "Laravel",],
      description:
        "Tuni allows businesses to reach out to their audience in a fun and interactive way.",
      logo: MonitoLogo,
      link: {
        label: "tuni.ke/",
        href: "https://tuni.ke/",
      },
    },
    {
      title: "Gig",
      techStack: ["Vue JS", "Tailwind", "Laravel", 'Blade'],
      description: "GiG is a self-service ticketing platform for live experiences that allows anyone to create, share, find and attend events that fuel their passions and enrich their lives.",
      logo: YearProgressLogo,
      link: {
        label: "gig.co.ke",
        href: "https://gig.co.ke/",
      },
    },
    {
      title: "SoundScape",
      techStack: ["Tailwind", "Ruby on Rails", "React JS"],
      description:
        "SoundScape is a cutting-edge music app that allows you to fully immerse yourself in your favorite songs. With its sleek design and user-friendly interface",
      logo: JarockiMeLogo,
      link: {
        label: "soundscape.com",
        href: "",
      },
    },
    {
      title: "Tikiti Tamasha",
      techStack: ["Bootstrap", "Ruby on Rails", "React JS"],
      description:
        "This is an e-ticketing app that allows a user to view all current and upcoming events that have been posted by our various organizers",
      logo: BarepapersLogo,
      link: {
        label: "tikititamasha.com",
        href: "",
      },
    },   
   
  ],
} as const;

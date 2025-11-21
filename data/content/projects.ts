import { kebabCase, kebabArray } from "@/utils/utils";
import { Project } from "types";

const projects: Project[] = [
  {
    id: 0,
    title: "Learn.TheYEI",
    desc: "All the resources you will need to get a boost into economics.",
    img: "/static/projects/yei-learn.png",
    link: "https://ingredo.vercel.app",
    github: "https://github.com/sx4im/ingredo",
    tags: ["React", "NextJS", "TailwindCSS", "CSS", "Firebase"],
  },
  {
    id: 1,
    title: "BuildFaster",
    desc: "Beautiful HTML templates ready-made for your next landing page.",
    img: "/static/projects/buildfaster.png",
    link: "https://ingredo.vercel.app",
    tags: ["HTML", "CSS", "Javascript", "Gumroad"],
  },
  {
    id: 2,
    title: "React Emoji Search",
    desc: "1800+ emojis at your fingertips. Ready-to-use with just a simple copy+paste.",
    img: "/static/projects/react-emoji-search.png",
    link: "https://ingredo.vercel.app",
    github: "https://github.com/sx4im/ingredo",
    tags: ["React", "CSS", "JSON"],
  },
  {
    id: 3,
    title: "BitcoinTemp",
    desc: "A fun way to check the price of bitcoin! Cloudy days, sunny days, and Bitcoin Storms!",
    img: "/static/projects/bitcointemp.png",
    link: "https://ingredo.vercel.app",
    tags: ["React", "NextJS", "SCSS", "API"],
  },
  {
    id: 4,
    title: "Create HTML Boilerplate",
    desc: "Generate a vanilla HTML boilerplate in a flash!",
    img: "/static/projects/create-html-boilerplate.png",
    link: "https://ingredo.vercel.app",
    github: "https://github.com/sx4im/ingredo",
    tags: ["Node", "Javascript", "NPM", "HTML"],
  },
  {
    id: 5,
    title: "8 Ball in your CLI",
    desc: "An 8 ball simulation in your CLI built with Rust!",
    img: "/static/projects/8ball-rust.png",
    link: "https://ingredo.vercel.app",
    github: "https://github.com/sx4im/ingredo",
    tags: ["Rust", "CLI", "Game"],
  },
  {
    id: 6,
    title: "DontLeaveMe 😭",
    desc: "Beg for users to stay on your website.",
    img: "/static/projects/dontleaveme.png",
    link: "https://ingredo.vercel.app",
    github: "https://github.com/sx4im/ingredo",
    tags: ["Javascript", "NPM"],
  },
  {
    id: 7,
    title: "Madlibs",
    desc: "A simple version of Madlibs built for the web!",
    img: "/static/projects/madlibs.png",
    link: "https://ingredo.vercel.app",
    github: "https://github.com/sx4im/ingredo",
    tags: ["HTML", "CSS", "Javascript"],
  },
];

export const allTags = []

projects.forEach((project) => {
  project.tags.forEach((tag) => !allTags.includes(tag) && allTags.push(tag))
});

export const allKebabTags = allTags.map(tag => (
  kebabCase(tag)
))

export default projects

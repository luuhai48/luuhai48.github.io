/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Hai Luu",
  title: "Hi all, I'm Hải",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web applications with Typescript / JavaScript / Reactjs / Nodejs / Python and some other cool libraries and frameworks."
  ),
  resumeLink:
    "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/luuhai48",
  linkedin: "https://www.linkedin.com/in/luuviethai/",
  gmail: "luuhai.hn48@gmail.com",
  gitlab: "https://gitlab.com/luuhai.hn48",
  facebook: "https://www.facebook.com/lvh48",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "BACKEND ENGINEER WHO LOVES TO EXPLORE AND MASTER MODERN TECH STACKS",
  skills: [
    emoji(
      "⚡ Build scalable backend systems and RESTful APIs using Node.js, Python, FastAPI, Django, and Fastify"
    ),
    emoji(
      "⚡ Design and optimize database architectures with MongoDB, PostgreSQL, and Redis for caching"
    ),
    emoji(
      "⚡ Deploy and manage containerized applications using Docker and orchestrate with Kubernetes"
    ),
    emoji(
      "⚡ Develop modern web applications with React and Next.js, creating responsive user experiences"
    ),
    emoji(
      "⚡ Build complete solutions from ERP systems to content platforms, always eager to learn new languages like Go and Java"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "php",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "mongodb",
      icon: 'https://raw.githubusercontent.com/devicons/devicon/refs/tags/v2.17.0/icons/mongodb/mongodb-original.svg'
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "googlecloud",
      icon: 'https://raw.githubusercontent.com/devicons/devicon/refs/tags/v2.17.0/icons/googlecloud/googlecloud-original.svg'
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "typescript",
      icon: "https://raw.githubusercontent.com/devicons/devicon/refs/tags/v2.17.0/icons/typescript/typescript-original.svg"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "tailwindcss",
      icon: "https://raw.githubusercontent.com/devicons/devicon/refs/tags/v2.17.0/icons/tailwindcss/tailwindcss-original.svg",
      customStyle: {
        opacity: 1,
      }
    },
    {
      skillName: "kubernetes",
      icon: 'https://raw.githubusercontent.com/devicons/devicon/refs/tags/v2.17.0/icons/kubernetes/kubernetes-original.svg'
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Ha Noi University of Business and Technology",
      logo: require("./assets/images/hubt-logo.jpg"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2015 - April 2019",
      desc: "",
      descBullets: []
    },
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Frontend",
      progressPercentage: "70%"
    },
    {
      Stack: "Cloud",
      progressPercentage: "60%"
    },
    {
      Stack: "Database & ORM",
      progressPercentage: "70%"
    },
    {
      Stack: "CI/CD & DevOps",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Full Stack Developer",
      company: "Tresor Solutions",
      companylogo: require("./assets/images/tresor-logo.jpeg"),
      date: "Jan 2025 – Present",
      desc: "Participated in as a Freelancer, built an ERP system for a gas pipe company in Vietnam. Not even I have used the experience in backend development, but also something else like Embedded systems, make the web app communicate with the hardware, etc."
    },
    {
      role: "Technical Lead",
      company: "Breadstack Technologies Inc",
      companylogo: require("./assets/images/breadstack-logo.jpeg"),
      date: "Jun 2022 – Jan 2026",
      desc: "Node.js backend developer and help built Live chat system with many unique features like Customer management, Order management, Coupon sending, Visitor realtime tracking, Ticket System, Email Marketing, etc. The system needs to be scalable and efficient, so I have to learn a lot about the system and the technologies used in the project. This is also where I became a Technical Lead for the project, bring the team together and help them grow."
    },
    {
      role: "Python Backend Developer",
      company: "Advesa Digital Solutions",
      companylogo: require("./assets/images/advesa-logo.jpeg"),
      date: "May 2020 – Feb 2022",
      desc: "Joined as Python backend developer and built APIs and Queues system for one of the company's product called 'Delivery App'. At this company, I truely started to becomes a more mature developer with knowledge of backend development and system design, Queue system, API design, Caching, Git, CI/CD, etc. Also where I learned to work in a team and collaborate with other developers, Agile development, etc."
    },
    {
      role: "Software Engineer Intern",
      company: "MEC International",
      companylogo: require("./assets/images/mec-logo.png"),
      date: "Oct 2018 – Jun 2020",
      desc: "Where I started my journey as a software engineer and built the web app for the company's ERP system. I had changes to bring what I learned from my university to the company's project and also learned a lot from my colleagues and mentors."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/mec-logo.png"),
      projectName: "MEC Intranet System",
      projectDesc: "MEC Intranet System is a system that allows the company to manage their resources and projects.",
      footerLink: []
    },
    {
      image: require("./assets/images/live-chat.png"),
      projectName: "Breadstack Live Chat",
      projectDesc: "A system that allow our B2B customers to chat support with their customers on their website. It also comes with many unique features like Customer management, Order management, Coupon sending, Visitor realtime tracking, Ticket System, Email Marketing, etc.",
      footerLink: [{
        name: "Visit Website",
        url: "https://breadstack.com/live-chat"
      }]
    },
    {
      image: require("./assets/images/pvpipe-logo.png"),
      projectName: "PVPIPE ERP System",
      projectDesc: "ERP system for PvPipe company in Vietnam. The features are: employee management, project management, production pipeline management, etc.",
    },
    {
      image: require("./assets/images/gasaga-logo.jpg"),
      projectName: "Novel Reading Website",
      projectDesc: "A website that allows users to read novels online. The features are: novel and chapter posting, read statistics, like and comment, admin dashboard, IP spam blocking, realtime notification, etc.",
      footerLink: [{
        name: "Visit Website",
        url: "https://gasaga.net"
      }]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        { name: "Certification", url: "" },
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+84-903273285",
  email_address: "luuhai.hn48@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};

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
  username: "Manjur Kanekal",
  title: "Hi all, I'm Manjur ",
  subTitle: emoji(
    "Full Stack Software Developer 🚀 with 6+ years of experience building scalable web applications using React, Angular, Java, Spring Boot, and cloud technologies like AWS."
  ),
  resumeLink: "PASTE_YOUR_GOOGLE_DRIVE_RESUME_LINK_HERE",
  displayGreeting: true
};


// Social Media Links

const socialMediaLinks = {
  github: "https://leetcode.com/u/Manjur_Kanekal/",
  linkedin: "https://www.linkedin.com/in/manjur-k/",
  gmail: "kanekalmanjur40@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Build responsive and high-performance UI using React and Angular"
    ),
    emoji("⚡ Develop backend services using Java and Spring Boot"),
    emoji(
      "⚡ Design and integrate REST APIs"
    ),
        emoji(
      "⚡ Work with AWS, Docker, and CI/CD pipelines"
    ),
            emoji(
      "⚡ Collaborate in Agile/Scrum environments"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

 softwareSkills: [

   {
    skillName: "React",
    fontAwesomeClassname: "fab fa-react"
  },
  {
    skillName: "Angular",
    fontAwesomeClassname: "fab fa-angular"
  },
   {
    skillName: "Java",
    fontAwesomeClassname: "fab fa-java"
  },
  {
    skillName: "Spring Boot",
    fontAwesomeClassname: "fas fa-leaf"
  },
      {
    skillName: "aws",
    fontAwesomeClassname: "fab fa-aws"
  },
    {
    skillName: "postgresql / mysql",
    fontAwesomeClassname: "fas fa-database"
  },
    {
    skillName: "JavaScript",
    fontAwesomeClassname: "fab fa-js"
  },
  {
    skillName: "REST APIs",
    fontAwesomeClassname: "fas fa-network-wired"
  },
    {
    skillName: "WebSockets",
    fontAwesomeClassname: "fas fa-exchange-alt"
  },
    {
    skillName: "TypeScript",
    fontAwesomeClassname: "fab fa-js"
  },
    {
    skillName: "docker",
    fontAwesomeClassname: "fab fa-docker"
  }
    {
    skillName: "redux / ngrx",
    fontAwesomeClassname: "fas fa-project-diagram"
  },
 
  {
    skillName: "redis",
    fontAwesomeClassname: "fas fa-database"
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

],

  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of North Texas",
      logo: require("./assets/images/UNT.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "January 2023 - December 2024",
      // desc: "Focused on software development and web technologies.",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },

    {
      schoolName: "Lovely Professional University",
      logo: require("./assets/images/LPU.png"),
      subHeader: "Bachelor of Technology in Computer Science",
      duration: "August 2016 - August 2020",
      // desc: "Bachelor’s in Computer Science from Lovely Professional University (LPU), ranked 31st among all universities in India (NIRF 2025). Built a strong foundation in Software Engineering, Web Development, Operating Systems, Databases, and problem-solving through hands-on coursework and academic projects.",
      // descBullets: [
      //   "Ranked 31st among all universities in India (NIRF 2025)",
      //   "Strong fundamentals in Computer Science and Software Engineering",
      //   "Hands-on experience through projects and practical coursework"
      // ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
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
  role: "Software Developer",
  company: "Texas Health Resources",
  companylogo: require("./assets/images/ths.png"),
  date: "Feb 2024 – Present",
  desc: "Worked on the MyChart Patient Portal, a large-scale healthcare application used by patients and clinicians.",
  descBullets: [
    "Built patient-facing UI features using React and Redux Toolkit for secure access to medical data",
    "Developed and integrated Java Spring Boot REST and WebSocket services on AWS for real-time updates",
    "Improved performance, accessibility, and reliability while collaborating in an Agile, HIPAA-compliant environment"
  ]
}
,
    {
      role: "Software Developer",
      company: "Antier Solutions",
      companylogo: require("./assets/images/antier.jpg"),
      date: "July 2020 – Dec 2022",
      desc: "Worked on fintech applications focused on digital wallet dashboards and transaction monitoring systems.",
      descBullets: [
      "Built interactive wallet dashboards using Angular, TypeScript, RxJS, and NgRx for real-time transaction views",
      "Developed Java Spring Boot REST APIs to support wallet operations, transaction history, and account workflows",
      "Integrated WebSocket-based updates, Redis caching, and AWS services to improve performance and scalability"
  ]    },
    {
      role: "Software Developer",
      company: "MPS Infotech",
      companylogo: require("./assets/images/mps.jpg"),
      date: "Dec 2018 – Jun 2020",
      desc: "Worked on modernizing an educational content and learning management platform for academic publishers.",
      descBullets: [
      "Migrated legacy JSP-based modules to Angular, building modular and responsive user interfaces",
      "Developed Java Spring Boot REST APIs for course delivery, progress tracking, and reporting workflows",
      "Deployed and maintained applications using AWS EC2, S3, and RDS to support scalable content delivery"
  ]    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "AWS Certified Developer Associate",
      subtitle: "Completed Certifcation from AWS for Developer Associate",
      image: require("./assets/images/aws.png"),
      imageAlt: "AWS Logo",
      footerLink: [
        //{
          //name: "Certification",
          //url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        //},
        //{
          //name: "Award Letter",
          //url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        //},
        //{
          //name: "Google Code-in Blog",
          //url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        //}
      ]
    },
    //{
      //title: "Google Assistant Action",
      //subtitle:
        //"Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      //image: require("./assets/images/googleAssistantLogo.webp"),
      //imageAlt: "Google Assistant Action Logo",
      //footerLink: [
        //{
          //name: "View Google Assistant Action",
          //url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        //}
      //]
    //},

    {
      title: "Meta Certified Frontend Developer",
      subtitle: "Completed Certifcation from Meta for Front-end Development",
      image: require("./assets/images/meta.png"),
      imageAlt: "Meta logo",
      footerLink: [
        //{name: "Certification", url: ""},
        //{
          //name: "Final Project",
          //url: "https://pakistan-olx-1.firebaseapp.com/"
        //}
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
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
  title: emoji("Reach Out to me!"),
subtitle:
  "Actively seeking Software and Full Stack Developer opportunities. Feel free to reach out for roles, collaborations, or discussions.",
  email_address: "kanekalmanjur40@gmail.com",
  number: "Software Developer | Full Stack",
  number1: "Open for Opportunities - Yes",
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
export const resumeLink = "/resume/Manjur_Kanekal_Resume.pdf";

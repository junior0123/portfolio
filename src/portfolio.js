/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation
import flutterImage from "./assets/images/flutter.svg"
import javaImage from "./assets/images/java.svg"
import javascriptImage from "./assets/images/javascript.svg"
import pythonImage from "./assets/images/python.svg"
import seleniumImage from "./assets/images/selenium.svg"
import cypressImage from "./assets/images/cypress.svg"
import appiumImage from "./assets/images/appium.svg"
import playwrightImage from "./assets/images/playwright.svg"
import jMeterImage from "./assets/images/jmeter.svg"
import postmanImage from "./assets/images/postman.svg"
import jenkinsImage from "./assets/images/jenkins.svg"
import dockerImage from "./assets/images/docker.svg"
import gherkinImage from "./assets/images/gherkin.svg"
import mysqlImage from "./assets/images/mysql.svg"
import postgresqlImage from "./assets/images/postgresql.svg"
import mariadDBImage from "./assets/images/mariadb.svg"
import sqlServerImage from "./assets/images/sqlserver.svg"
import pytestImage from "./assets/images/pytest.svg"
import junitImage from "./assets/images/junit.svg"
import testngImage from "./assets/images/testng.png"
import gitImage from "./assets/images/git.svg"
import githubImage from "./assets/images/github.svg"
import gitlabImage from "./assets/images/gitlab.svg"
import gradleImage from "./assets/images/gradle.svg"
import mavenImage from "./assets/images/maven.svg"
import jiraImage from "./assets/images/jira.svg"
import azureDevopsImage from "./assets/images/azuredevops.svg"
import project1Image from "./assets/images/project1.jpeg"
import project2Image from "./assets/images/projecto2.jpeg"


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
  username: "Alvaro Sivila",
  title: "Hi all, I'm Alvaro",
  subTitle: emoji(
    "A passionate QA Manual and Automation Specialist 🚀 with experience in ensuring the highest quality for web and mobile applications. Adept at utilizing a variety of frameworks such as Selenium, Appium, Cypress, and Playwright to create robust automated test suites. Excellent at reporting bugs, isolating issues, and executing test cases to ensure high-quality software releases."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/junior0123",
  linkedin: "https://www.linkedin.com/in/alvaro-sivila-ram%C3%ADrez-0a8537113/",
  gmail: "juniorsivila123@gmail.com",
  gitlab: "https://gitlab.com/alvaro.sivila",
  //facebook: "https://www.facebook.com/saad.pasta7",
  //medium: "https://medium.com/@saadpasta",
  //stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "QA MANUAL AND AUTOMATION SPECIALIST WHO WANTS TO MASTER EVERY TESTING FRAMEWORK AND TOOL",
  skills: [
    emoji(
      "⚡ Proficient in manual testing to ensure comprehensive coverage and quality assurance for web and mobile applications"
    ),
    emoji("⚡ Expertise in automation frameworks such as Selenium, Appium, Cypress, and Playwright to streamline and enhance testing processes"),
    emoji(
      "⚡ Skilled in using various tools like Postman, JMeter, and Cucumber for efficient and effective testing and integration"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Java",
      image: javaImage
    },//<i class="fa-brands fa-java"></i> <i class="fab fa-java"></i>
    {
      skillName: "Python",
      image: pythonImage
    },
    {
      skillName: "JavaScript",
      image: javascriptImage
    },
    {
      skillName: "Flutter",
      image: flutterImage
    },
    {
      skillName: "Selenium Web Driver",
      image: seleniumImage
    },
    {
      skillName: "Cypress",
      image: cypressImage
    },
    {
      skillName: "Appium",
      image: appiumImage
    },
    {
      skillName: "Playwright",
      image: playwrightImage
    },
    {
      skillName: "Jmeter",
      image: jMeterImage
    },
    {
      skillName: "Postman",
      image: postmanImage
    },
    {
      skillName: "Jenkins",
      image: jenkinsImage
    },
    {
      skillName: "Docker",
      image: dockerImage
    },
    {
      skillName: "Gherkin / Cucumber",
      image: gherkinImage
    },
    {
      skillName: "MySQL",
      image: mysqlImage
    },
    {
      skillName: "PostgreSQL",
      image: postgresqlImage
    },
    {
      skillName: "MariaDB",
      image: mariadDBImage
    },
    {
      skillName: "Sql Server",
      image: sqlServerImage
    },
    {
      skillName: "Pytest",
      image: pytestImage
    },
    {
      skillName: "JUnit",
      image: junitImage
    },
    {
      skillName: "TestNG",
      image: testngImage
    },
    {
      skillName: "Git",
      image: gitImage
    },
    {
      skillName: "GitHub",
      image: githubImage
    },
    {
      skillName: "Gitlab",
      image: gitlabImage
    },
    {
      skillName: "Gradle",
      image: gradleImage
    },
    {
      skillName: "Maven",
      image: mavenImage
    },
    {
      skillName: "Jira",
      image: jiraImage
    },
    {
      skillName: "Azure Devops",
      image: azureDevopsImage
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Jala University",
      logo: require("./assets/images/jala.png"),
      subHeader: "Software Automation Testing Specialization",
      duration: "August 2022 - June 2023",
      desc: "As one of the top students in the program, I participated in the creation of test plans and led my project teams, successfully completing the specialization with a focus on advanced automation techniques.",

      descBullets: [
        "Reported bugs and defects in the software, ensuring product quality.",
        "Wrote detailed test cases to ensure comprehensive coverage.",
        "Implemented a hybrid framework from scratch for API and UI testing ",
        "Actively participated in team meetings and project tracking. ",
        "Tracked and documented bugs and feature requests through a tracking system. ",
        "Gained skills in agile methodologies and framework development.",
        "Developed expertise in creating test automation scripts using Java, Selenium, and REST Assured.",
        "Conducted API and UI testing, applying knowledge of web and API testing.",
        "Demonstrated familiarity with testing methodologies and software quality best practices. ",
        "Utilized my skills to analyze and debug issues in test code and collaborate with the development team for resolution.",
        "Showcased effective communication skills and the ability to work in a team environment ",
      ]
    },
    {
      schoolName: "Universidad Mayor de San Simón",
      logo: require("./assets/images/umss.jpeg"),
      subHeader: "Bachelor's Degree in Electronic Engineering",
      duration: "2012 - 2019",
      desc: "Ranking among the top 10% of the program with a focus on areas such as Robotics, Digital Electronic Design, and Dynamic Control Systems, achieving a perfect score of 100 for my thesis defense.",
      descBullets: [
        "Served as a teaching assistant for four courses: Robotics, Digital Electronic Design I, Dynamic Control Systems Theory, and Dynamic Control Systems Laboratory",
        "Developed and implemented a facial recognition system as part of my thesis, designing both the electronic hardware and the software",
        "Participated in several research projects, contributing to advancements in electronic engineering and automation",
        "Gained hands-on experience in electronic design through various practical projects in robotics and automation"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Manual Testing", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Automation Testing",
      progressPercentage: "90%"
    },
    {
      Stack: "Programming/Scripting",
      progressPercentage: "80%"
    }

  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Freelance",
      company: "Upwork",
      companylogo: require("./assets/images/upwork.png"),
      date: "June 2023 - Now",
      desc: "I've been working with a diverse range of clients, leveraging my skills to ensure the quality and reliability of their software projects. My focus has been on debugging and enhancing test automation frameworks, as well as developing and implementing comprehensive API test suites."
    },
    {
      role: "Software Quality Automation Engineer",
      company: "Jalasoft",
      companylogo: require("./assets/images/jalasoft.png"),
      date: "March 2023 – June 2023 (Remote)",
      desc: "I utilized my Java expertise while expanding my knowledge of test automation techniques by collaborating on real projects, gaining a comprehensive understanding of testing processes and methodologies, and enhancing my skills in Agile practices, framework creation, and quality assurance",
      descBullets: [
        "Successfully resolved complex testing issues, ensuring high-quality deliverables.",
        "Consistently recognized as the fastest in completing tasks and meeting deadlines",
        "Played a key role in enhancing test automation frameworks, improving efficiency and reliability."
      ]
    },
    {
      role: "Teaching Assistant",
      company: "FCYT",
      companylogo: require("./assets/images/fcyt.png"),
      date: "May 2017 – May 2018",
      desc: "I partnered with the lead professor to guide students through complex concepts, both in theory and in practice. My emphasis on active engagement and the creation of hands-on projects contributed to deep and meaningful learning.",
      descBullets: [
        "Developed innovative teaching strategies that enabled students to grasp complex concepts, reflected in positive student evaluations.",
        "Was a key collaborator in creating challenging projects that allowed students to apply their knowledge in solving real-world problems.",
        "Provided comprehensive support to the professor in preparing teaching materials, grading assignments, and managing the classroom, contributing to the course's success.",
      ]
    },

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
  title: "Projects",
  subtitle: "Some of the projects I have implemented",
  projects: [
    {
      image: project1Image,
      projectName: "Job Search Automation with AI in Linkedin",
      projectDesc: "This project automates job searching on LinkedIn by using AI to discriminate between job postings and other content in the user's feed:",
      footerLink: [
        {
          name: "Visit Post",
          url: "https://www.linkedin.com/posts/alvaro-sivila-ram%C3%ADrez-0a8537113_automatizaciaejn-baeqsquedadeempleo-tecnologaeda-activity-7207377220430876674-bkkW?utm_source=share&utm_medium=member_desktop"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: project2Image,
      projectName: "Smart Job Search on LinkedIn with AI",
      projectDesc: "Automating tailored job searches on LinkedIn's job platform, utilizing AI to match users with the best-suited opportunities.",
      footerLink: [
        {
          name: "Ongoing",
          url: "https://github.com/junior0123/playwright-project"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Courses and Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Scrum Fundamentals Certified (SFC)",
      subtitle:
        "SCRUMstudy - Accreditation Body for Scrum and Agile",
      image: require("./assets/images/scrumstudy.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.scrumstudy.com/certification/verify?type=SFC&number=1033699"
        }
      ]
    },
    {
      title: "Six Sigma Yellow Belt (SSYB)",
      subtitle:
        "6sigmastudy - Global Accreditation Body for Six Sigma Certifications",
      image: require("./assets/images/6sigma.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.6sigmastudy.com/certification/verify?type=SSYB&number=890883"
        }
      ]
    },
    {
      title: "SQL - Curso completo de Bases de Datos - de 0 a Avanzado",
      subtitle:
        "Udemy",
      image: require("./assets/images/udemy.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.udemy.com/certificate/UC-03fdbc4e-56ed-4697-9bac-b2c3d097c722/"
        }
      ]
    },
    {
      title: "Curso Profesional de Docker",
      subtitle:
        "Código Facilito",
      image: require("./assets/images/codigofacilito.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://codigofacilito.com/certificates/26a3fbac-b12e-448c-b285-ace3b986e18b"
        }
      ]
    },
    {
      title: "Curso Profesional de Git",
      subtitle:
        "Código Facilito",
      image: require("./assets/images/codigofacilito.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://codigofacilito.com/certificates/26a3fbac-b12e-448c-b285-ace3b986e18b"
        }
      ]
    },
    {
      title: "Curso de Patrones de Diseño con JAVA",
      subtitle:
        "Código Facilito",
      image: require("./assets/images/codigofacilito.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://codigofacilito.com/certificates/26a3fbac-b12e-448c-b285-ace3b986e18b"
        }
      ]
    },
    {
      title: "Curso profesional de flutter",
      subtitle:
        "Código Facilito",
      image: require("./assets/images/codigofacilito.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://codigofacilito.com/certificates/d4f42e92-88dd-45e4-b76f-e79cf03a81ff"
        }
      ]
    },
    {
      title: "Todo sobre Notion. Organiza tu trabajo y se mas Productivo",
      subtitle:
        "Udemy",
      image: require("./assets/images/udemy.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.udemy.com/certificate/UC-b8978bc5-4477-4325-9de2-b91b566e6b72/"
        }
      ]
    },
    {
      title: "Design a mobile app interface with Moqups",
      subtitle:
        "Coursera",
      image: require("./assets/images/coursera.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://coursera.org/verify/AC9BRQN4L222"
        }
      ]
    },
    {
      title: "Software Automation Testing Specialization",
      subtitle:
        "Jala University",
      image: require("./assets/images/jala.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://certificates.cosmic-latte.com/verify/HgxwPzhXBi9Gcixvd"
        }
      ]
    },
    {
      title: "SQL: Creacion de Bases de Datos (De cero a profesional)",
      subtitle:
        "Udemy",
      image: require("./assets/images/udemy.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.udemy.com/certificate/UC-84877de4-c0bc-4f4d-a534-768b3a6923df/"
        }
      ]
    },
    {
      title: "Python para no matemáticos: De 0 hasta reconocimiento facial",
      subtitle: "Udemy",
      image: require("./assets/images/udemy.webp"),
      imageAlt: "PWA Logo",
      footerLink: [

        {
          name: "Certification",
          url: "https://www.udemy.com/certificate/UC-08f09ff5-a2a0-4db6-8fe6-0d77b87bcd0a/"
        }
      ]
    },
    {
      title: "Introduction to the Internet of things and Embedded Systems",
      subtitle: "University of California, Irvine Division of Continuing Education I Coursera",
      image: require("./assets/images/coursera.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        { name: "Certification", url: "https://coursera.org/verify/HVABLM4B2ABJ" },

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
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+591-79178191",
  email_address: "juniorsivila123@gmail.com"
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

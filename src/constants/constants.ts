import { InfoPropsInterface } from "../interfaces/info.interface";
import { NavigationInterface } from "../interfaces/navigation.interface";
import { SocialMediaInterface } from "../interfaces/social.interface";
import GithubIcon from "../components/icon/GithubIcon";
import { ExperienceInterface } from "../interfaces/experience.interface";
import LinkedinIcon from "../components/icon/LinkedinIcon";
import { ProjectInterface } from "../interfaces/project.interface";

import undergraduatePic from "../assets/images/undergraduate-project.png";
import chatbotPic from "../assets/images/chatbot-emotion.png";
import electricBillCalculatorPic from "../assets/images/electric-bill-calculator.png";
import { HeadRowInterface, ProjectTableBodyRowPropInterface } from "../interfaces/table.interface";

export const HOMEPAGE_PATH = `/`;
export const PROJECTPAGE_PATH = `/project`;
export const RESUME_PATH = `/resume.pdf`;

export const fullname = "Veerayuth Bussararungsee";
export const position = "A Software Developer";
export const status = "I love building minimalistic front-end designs that emphasize simplicity, clarity, and functionality.";

export const infoData: InfoPropsInterface = {
    fullname: fullname,
    position: position,
    status: status,
};

export const navMenu: NavigationInterface[] = [
    { id: "about", title: "About", href: "#about" },
    { id: "experience", title: "Experience", href: "#experience" },
    { id: "projects", title: "Projects", href: "#projects" },
];

export const socialMediaLinks: SocialMediaInterface[] = [
    {
        title: "Github",
        href: "https://github.com/vveyuux",
        icon: GithubIcon,
    },
    {
        title: "LinkedIn",
        href: "https://linkedin.com/in/veerayuth-bussararungsee",
        icon: LinkedinIcon,
    },
];

export const experiences: ExperienceInterface[] = [
    {
        title: "Software Developer",
        companyName: "Sirisoft Public Company Limited",
        description: "Developed and deployed client websites and mobile apps using AngularJS for web and Flutter for mobile. Ensured smooth performance across browsers and devices. Clients included the Rubber Authority of Thailand (RAOT).",
        href: "https://www.sirisoft.co.th/",
        startDate: "Sep 2024",
        endDate: "Present",
        techStacks: [
            "AngularJS",
            "TypeScript",
            "NestJS",
            "Oracle"
        ],
    },
    {
        title: "Student Internship",
        companyName: "SCB Tech X Company Limited",
        description:
            "During my internship, I developed two web applications, a Clocking Web Application and an Overtime Web Application. The Clocking Web Application, helps employees easily record their work hours and allows managers to track and monitor this information. The Overtime Web Application, enables employees to request approval for overtime work, ensuring management can approve and verify these requests.",
        href: "https://scbtechx.io/th/home/",
        startDate: "Jun 2023",
        endDate: "Jan 2024",
        techStacks: [
            "ReactJS",
            "TypeScript",
            "ExpressJS",
            "Ruby on Rails",
            "PostgreSQL",
            "Docker",
            "Jenkins",
            "Kong API Gateway",
            "Azure Active Directory",
        ],
    },
];

export const projects: ProjectInterface[] = [
    {
        projectName: "A Machine Learning and Image Processing Model",
        subName: "for Medicine Identification for the Hearing Impaired (Undergraduate Project)",
        description:
            "The user captures an image of a pill, which the system analyzes to identify its type and properties. The resulting interface provides drug information and voice messages for visually impaired users, all developed using MATLAB.",
        href: "",
        imgPath: undergraduatePic,
        imgAlt: "Machine Learning Model for Medicine Identification",
        techStacks: ["Matlab", "Machine Learning", "Support Vector Machines", "Logistic Regression"],
    },
    {
        projectName: "Emotion Detection Chatbot",
        subName: "Analyzing Emotional Tone in Text",
        description:
            "In this project, the chatbot receives text input from the user, analyzes the emotional tone using its built-in model, and then responds with sentences that align with the detected emotion. The system aims to understand and mirror the user's emotional state, providing contextually relevant and empathetic responses.",
        href: "https://github.com/vveyuux/chatbot-ai-project",
        imgPath: chatbotPic,
        imgAlt: "Emotion Detection Chatbot",
        techStacks: ["Python", "TensorFlow", "NLTK", "Numpy", "Tkinter"],
    },
    {
        projectName: "Electric Bill Calculator",
        subName: "Splits a single bill between two electric meters",
        description:
            "One day, my girlfriend and I got tired of calculating her mother's electric bill, which she shares with her husband's family. We decided to develop a web app to separate the electric bill into two parts. In this app, users can input details like the energy fee, main house kWh unit, sub house kWh unit, service fee, FT fee, and VAT. The system then calculates and provides two separate electric bills for the main house and sub house.",
        href: "https://github.com/rynlapat/electric-bill-calculator",
        imgPath: electricBillCalculatorPic,
        imgAlt: "Electric Bill Calculator Web Page",
        techStacks: ["TypeScript", "ReactJS", "NextJS"],
    },
];

export const projectTableHeads: HeadRowInterface[] = [
    {
        title: "Year",
    },
    {
        title: "Project",
    },
    {
        title: "Tech Stacks",
        hidden: true,
        lg: true,
    },
    {
        title: "Repository",
        hidden: true,
        sm: true,
    },
];

export const allProjectData: ProjectTableBodyRowPropInterface[] = [
    {
        year: "2024",
        projectName: "Electric Bill ",
        projectSubName: "Calculator",
        builtWith: ["TypeScript", "ReactJS", "NextJS"],
        titleLink: "electric-bill-calculator",
        href: "https://github.com/rynlapat/electric-bill-calculator",
    },
    {
        year: "2023",
        projectName: "Todo List ",
        projectSubName: "Web App",
        builtWith: ["HTML", "CSS", "JavaScript", "MongoDB"],
        titleLink: "todo-list-web-app",
        href: "https://github.com/vveyuux/todo-list-web-app",
    },
    {
        year: "2023",
        projectName: "Simon Game ",
        projectSubName: "Web App",
        builtWith: ["HTML", "CSS", "JavaScript"],
        titleLink: "simon-game",
        href: "https://github.com/vveyuux/simon-game",
    },
    {
        year: "2023",
        projectName: "Dice Game ",
        projectSubName: "Web App",
        builtWith: ["HTML", "CSS", "JavaScript"],
        titleLink: "dice-game",
        href: "https://github.com/vveyuux/dice-game",
    },
    {
        year: "2022",
        projectName: "Emotion Detection ",
        projectSubName: "Chatbot",
        builtWith: ["Python", "TensorFlow", "NLTK", "Numpy", "Tkinter"],
        titleLink: "chatbot-ai-project",
        href: "https://github.com/vveyuux/chatbot-ai-project",
    },
];

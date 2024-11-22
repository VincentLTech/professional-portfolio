import React from 'react'
import date from 'date-and-time';



import { FaHtml5, FaCss3,FaJs, FaReact, FaFigma, FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs} from 'react-icons/si';


const now = new Date();
var target= date.format(now, 'YYYY')- 2018;


const about = {
    title: "About me",
    description: "",
    info: [
        {
            fieldName: "Name",
            fieldValue: "Vincent Lau"
        },
        {
            fieldName: "Phone",
            fieldValue: "(917)-370-6277"
        },
        {
            fieldName: "Experience",
            fieldValue: target+ "+ Years"
        },
        {
            fieldName: "Email",
            fieldValue: "vincent.lau.cs@gmail.com"
        },
        {
            fieldName: "Language",
            fieldValue: "English, Chinese(Cantonese)"
        },
    ]
}
const experience = {
    icon:'/assets/rusume/badge.svg',
    title: "My experience",
    description:
        "This is my work. Can you see it?",
    items: [
        {
            company: "Tech Solution Inc.",
            position: "Full Stack Developer",
            duration: "2022 - Present",
        },
        {
            company: "Tech Solution Inc.",
            position: "Full Stack Developer",
            duration: "2022 - Present",
        },
        {
            company: "Tech Solution Inc.",
            position: "Full Stack Developer",
            duration: "2022 - Present",
        },
        {
            company: "Tech Solution Inc.",
            position: "Full Stack Developer",
            duration: "2022 - Present",
        },

    ]
}
const education = {
    icon:'/assets/rusume/cap.svg',
    title: "My Eduaction",
    description:
        "This is all of my education",
    items: [
        {
            institution: "Tech Solution Inc.",
            degree: "Full Stack Developer",
            duration: "2022 - Present",
        },
        {
            institution: "Tech Solution Inc.",
            degree: "Full Stack Developer",
            duration: "2022 - Present",
        },
        {
            institution: "Tech Solution Inc.",
            degree: "Full Stack Developer",
            duration: "2022 - Present",
        },
        {
            institution: "Tech Solution Inc.",
            degree: "Full Stack Developer",
            duration: "2022 - Present",
        },

    ]
}
const skills = {
    title: "My Skills",
    description:
        "This is all of my skills",
    items: [
        {
            icon: <FaHtml5/>,
            name: "html 5",
        },
        {
            icon: <FaCss3/>,
            name: "css 3",
        },
        {
            icon: <FaJs/>,
            name: "JavaScript",
        },
        {
            icon: <FaReact/>,
            name: "React.js",
        },
        {
            icon: <SiNextdotjs/>,
            name: "Next.js",
        },
        {
            icon: <SiTailwindcss/>,
            name: "TailwindCSS",
        },

        {
            icon: <FaNodeJs/>,
            name: "Node.js",
        },
        {
            icon: <FaFigma/>,
            name: "Figma",
        },
    ]
}
const Resume = () => {
  return (
    <div>Resume</div>
  )
}

export default Resume
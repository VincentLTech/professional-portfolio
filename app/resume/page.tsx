"use client"
import React from 'react'
// import date from 'date-and-time';

import { FaHtml5, FaCss3,FaJs, FaReact, FaFigma, FaNodeJs,FaBootstrap,FaJava,FaWordpress } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs, SiTypescript, SiExpress,SiMongodb ,SiPrisma,SiFlask} from 'react-icons/si';


// const now = new Date();
// var target= date.format(now, 'YYYY')- 2018;

// const about = {
//     title: "About me",
//     description: "Hello! I love to build/design things that lives on the internet. I have always wonder how imagination and designs and even entire worlds exist in just a flat screen on a wall. I always love interacting with the artifical world that resides in the internet. Through it, I made friends and connections with the people I care about. I want to see what I can do to help the world for I believe that we are called to love one another. So I studied and earned my Computer Science Degree in Brooklyn College and now I have ventured through the life changing experience in a bootcamp called Coding Dojo. When I am not coding, I enjoy serving my Church community and help build the Esports Club that me and my friends started in Brooklyn College.",
//     info: [
//         {
//             fieldName: "Name",
//             fieldValue: "Vincent Lau"
//         },
//         {
//             fieldName: "Phone",
//             fieldValue: "(917)-370-6277"
//         },
//         {
//             fieldName: "Experience",
//             fieldValue: target+ "+ Years"
//         },
//         {
//             fieldName: "Email",
//             fieldValue: "vincent.lau.cs@gmail.com"
//         },
//         {
//             fieldName: "Language",
//             fieldValue: "English, Chinese"
//         },
//     ]
// };

const experience = {
    icon:'/assets/rusume/badge.svg',
    title: "My experience",
    description:
        "",
    items: [
        {
            company: "Trust Fund Registry.",
            position: "Lead Front End Developer Intern",
            duration: "2022",
        },
        {
            company: "Trust Fund Registry",
            position: "Lead UX/UI Designer Intern",
            duration: "2022",
        },
        {
            company: "Brooklyn College Esports Club",
            position: "Website Creator",
            duration: "2023 - Present",
        },
        {
            company: "Brooklyn Community Christian Church",
            position: "Website Maintainer",
            duration: "2024 - Present",
        },
        {
            company: "Chingu",
            position: "Full Stack Developer",
            duration: "2023-2024",
        },

    ]
};
const education = {
    icon:'/assets/rusume/cap.svg',
    title: "My Eduaction",
    description:
        "This is all of my education",
    items: [
        {
            institution: "Brooklyn College",
            degree: "Bachelors of Computer Science",
            duration: "2018 - 2022",
        },
        {
            institution: "Coding Dojo",
            degree: "Full Stack Software Development Cert.",
            duration: "2022 - 2023",
        },
        {
            institution: "Revature",
            degree: "Java Full Stack Development",
            duration: "2024 - Present",
        },
        {
            institution: "Cuny Tech Prep Bootcamp",
            degree: "PERN Stack Developer Graduate",
            duration: "2021-2022",
        },

    ]
};
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
            icon: <FaJava/>,
            name: "Java",
        },
        {
            icon: <SiTypescript/>,
            name: "TypeScript",
        },
        {
            icon: <FaReact/>,
            name: "React",
        },
        {
            icon: <SiNextdotjs/>,
            name: "Next",
        },
        {
            icon: <FaNodeJs/>,
            name: "Node",
        },
        {
            icon: <SiExpress/>,
            name: "Express",
        },
        {
            icon: <SiMongodb/>,
            name: "MongoDB",
        },
        {
            icon: <SiTailwindcss/>,
            name: "TailwindCSS",
        },
        {
            icon: <FaFigma/>,
            name: "Figma",
        },
        {
            icon: <FaWordpress/>,
            name: "Wordpress",
        },
        {
            icon: <FaBootstrap/>,
            name: "Bootstrap",
        },
        {
            icon: <SiPrisma/>,
            name: "Prisma",
        },
        {
            icon: <SiFlask/>,
            name: "Flask",
        },


    ]
};

import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@radix-ui/react-tooltip';
import {ScrollArea } from "@/components/ui/scroll-area";
import { motion } from 'framer-motion';

const Resume = () => {
  return (
    <div>
        <motion.div 
            initial={{opacity:0}} 
            animate={{
                opacity: 1, 
                transition:{ delay: 2.4,  duration: 0.4,  ease: "easeIn" },
            }}
            className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'
        >
            <div className='container mx-auto'>
                <Tabs defaultValue='experience' className='flex flex-col xl:flex-row gap-[60px]'>
                    <TabsList className='flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6'>
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        {/* <TabsTrigger value="about">About Me</TabsTrigger> */}
                    </TabsList>
                    <div className='min-h-[70vh] w-full'>
                        {/* go to components and modify tabs */}
                        <TabsContent value="experience" className='w-full'>
                            <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                                <h3 className='text-4xl font-bold'>{experience.title}</h3>
                                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{experience.description}</p>
                                <ScrollArea className='h-[400px] '>
                                    <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px] text-left'>
                                        {experience.items.map((item, index) =>{
                                            return(
                                                <li key={index} className="bg-[#232329] h-[184px] py-6 rounded-xl flex flex-col justify-center items-center pl-5 lg:items-start gap-1 ">
                                                    <span className='text-accent'>{item.duration}</span>
                                                    <h3 className='text-xl max-w-[260px] min-h-[60px] lg:text-left '>{item.position}</h3>
                                                    <div className='flex items-center gap-3'>
                                                        <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                                                        <p className='text-white/60'>{item.company}</p>
                                                    </div>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        <TabsContent value="education" className='w-full'>
                            <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                                <h3 className='text-4xl font-bold'>{education.title}</h3>
                                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{education.description}</p>
                                <ScrollArea className='h-[400px]'>
                                    <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                                        {education.items.map((item, index) =>{
                                            return(
                                                <li key={index} className="bg-[#232329] h-[184px] py-6 rounded-xl flex flex-col justify-center items-center pl-5 lg:items-start gap-1">
                                                    <span className='text-accent'>{item.institution}</span>
                                                    <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.degree}</h3>
                                                    <div className='flex items-center gap-3'>
                                                        <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                                                        <p className='text-white/60'>{item.duration}</p>
                                                    </div>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        <TabsContent value="skills" className='w-full h-full'>
                            <div className='flex flex-col gap-[30px]'>
                                <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                                    <h3 className='text-4xl font-bold'>{skills.title}</h3>
                                    <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{skills.description}</p>
                                </div>
                                <ScrollArea className='h-[400px] '>

                                    <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px]'>
                                        {skills.items.map((skill, index) =>{
                                            return(
                                                <li key = {index}> 
                                                    <TooltipProvider delayDuration={100}>
                                                        <Tooltip>
                                                            <TooltipTrigger className='w-full h-[150px] bg-[#232329] reounded-xl flex justify-center items-center group'>
                                                                <div className='text-6xl group-hover:text-accent transition-all duration-300'>{skill.icon}</div>
                                                            </TooltipTrigger>
                                                            <TooltipContent>
                                                                <p className='capitalize'>{skill.name}</p>
                                                            </TooltipContent>
                                                        </Tooltip>
                                                    </TooltipProvider>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>




                        {/* <TabsContent value="about" className='w-full'>
                            <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                                <h3 className='text04xl font-bold'>{about.title}</h3>
                                <ScrollArea className='h-[300px] '>
                                    <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{about.description}</p>
                                </ScrollArea>
                                <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0'>    
                                    {about.info.map((item,index) =>{
                                        return(
                                            <li key={index} className=' flex items-center justify-center xl:justify-start gap-4'>
                                                <span className='text-white/60'>{item.fieldName}: </span>
                                                <span className='text-xl'>{item.fieldValue}</span>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </TabsContent> */}

                    </div>
                </Tabs>
            </div>
        </motion.div>
        </div>
  );

}

export default Resume
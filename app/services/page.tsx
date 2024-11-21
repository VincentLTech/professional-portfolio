"use client"
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";
import React from 'react'

const services = [
    {
        num: '01',
        title: 'Full Stack Development',
        description: 'I can build Full Stack projects and softwares utilizing both Front-end and Back-end technologies',
        href: ""
    },
    {
        num: '02',
        title: 'Web Development',
        description: 'I am skilled in using HTML, CSS and JavaScript to build and structure websites.',
        href: ""
    },
    {
        num: '03',
        title: 'Front-end Development',
        description: 'I am able to deliver front-end code using front-end technologies such as React.js and Next.js through JavaScript or TypeScript',
        href: ""
    },
    {
        num: '04',
        title: 'UX/UI Designer',
        description: 'I am skilled at using WordPress and Figma to build Website designs and utilize wireframes to organize product structures',
        href: ""
    },
    {
        num: '05',
        title: 'Backend Development ',
        description: 'I have knowledge in creating backend models and routes utilizing tools like Node.js Express.js, MongoDB, SQL and PostgreSQL',
        href: ""
    },
    {
        num: '06',
        title: 'Programming Tudor',
        description: 'I enjoy building amazing thing on my computer and I can teach college level student how to visualize and understand programming',
        href: ""
    },
    {
        num: '07',
        title: 'Project Manager',
        description: 'I have experience in dedigating task and organizing teams and groups to make deployable projects and scheduling meetings with stakeholders to meet product requirements ',
        href: ""
    },
    {
        num: '08',
        title: 'Piano Coach',
        description: 'I love piano and I and love using Musecore and Embers to write up guides for songs that does not have an official sheet music to them.',
        href: ""
    },

]
const Services = () => {
    return (
        <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
            <div className="container mx-auto">
                <motion.div 
                    initial = {{opacity: 0}} 
                    animate={{
                        opacity: 1, 
                        transition: {
                            delay:2.4, 
                            duration: 0.4,
                            ease: "easeIn"
                        },
                        
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
                >
                    {services.map((service, index)=>{
                        return (
                            <div key={index} className="flex-1 flex flex-col justify-center gap-6 group"> 
                                <div className="w-full flex justify-between items-center">
                                    <div className="text-5xl font-extrabold">{service.num}</div>
                                    <Link href={service.href}>
                                        <BsArrowDownRight/> 
                                    </Link>
                                </div>
                                <h2> {service.title}</h2>
                                <p> {service.description}</p>
                                <div className="border-b border-white/20 w-full"></div>
                            </div>
                        )
                    }
                )}
                </motion.div>
            </div>
        </section>
    )
}

export default Services;
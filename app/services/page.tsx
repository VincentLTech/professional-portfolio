"use client"
import { BsArrowDownRight } from "react-icons/bs";

import { motion } from "framer-motion";
import React from 'react'
// import Link from "next/link";
// import { ScrollArea } from "@radix-ui/react-scroll-area";
const services = [
    {
        num: '01',
        title: 'Software Engineer',
        description: 'I am skilled in full-stack development with Java, Python, React, and Next.js, building responsive web applications, leading engineering teams, and delivering accessible, high-performing digital experiences.',

    },
    {
        num: '02',
        title: 'Radiology Technologist',
        description: 'I am skilled in operating advanced imaging equipment and producing high-quality radiographs while ensuring patient safety and comfort. I have also served in serving trauma patients',

    },
    {
        num: '03',
        title: 'Web Developer',
        description: 'I am skilled in renovating, developing, and maintaining community-focused websites using wireframing, HTML5, and clean front-end practices.',

    },
    {
        num: '04',
        title: 'UX/UI Designer',
        description: 'I am skilled at using WordPress and Figma to build Website designs and utilize wireframes to organize product structures',

    },
    {
        num: '05',
        title: 'Data Engineer',
        description: 'I am skilled in building data pipelines, working with SQL, Python, and Spark, and supporting data infrastructure across cloud platforms like AWS, Azure, and GCP.',

    },
    {
        num: '06',
        title: 'Accountant',
        description: 'I am skilled in managing financial records and reporting using QuickBooks and Microsoft Excel to support accurate and organized bookkeeping.',

    },
    {
        num: '07',
        title: 'Data Entry Specialist',
        description: 'I am skilled in organizing, entering, and delivering large volumes of data and resources while supporting human resources and administrative operations.',

    },
    {
        num: '08',
        title: 'Piano Coach',
        description: 'I love piano and I and love using Musecore and Embers to write up guides for songs that does not have an official sheet music to them.'
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
                                    <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{service.num}</div>
                                    <div className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center group-hover:-rotate-45">
                                        <BsArrowDownRight className="text-primary text-3xl"/> 
                                    </div>
                                </div>
                                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500"> {service.title}</h2>
                                <p > {service.description}</p>
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

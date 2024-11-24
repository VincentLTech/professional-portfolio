"use client"

import React from 'react'
import date from 'date-and-time';
import {ScrollArea } from "@/components/ui/scroll-area";
import { motion } from 'framer-motion';
import { FaPhoneAlt,FaEnvelope, FaMapMarkedAlt } from 'react-icons/fa';
import { IoLanguageSharp } from "react-icons/io5";
import { FaBusinessTime } from "react-icons/fa";

const now = new Date();
var target= date.format(now, 'YYYY')- 2018;

const about = [
    
        {
            icon:<FaPhoneAlt/>,
            fieldName: "Phone",
            fieldValue: "(917)-370-6277"
        },
        {
            icon:<FaBusinessTime/>,
            fieldName: "Experience",
            fieldValue: target+ "+ Years"
        },
        {
            icon:<FaEnvelope/>,
            fieldName: "Email",
            fieldValue: "vincent.lau.cs@gmail.com"
        },
        {
            icon:<IoLanguageSharp/>,
            fieldName: "Language",
            fieldValue: "English, Chinese"
        },
        // {
        //     icon:</>,
        //     fieldName: "Language",
        //     fieldValue: "English, Chinese"
        // },
    ];



const Contact = () => {
    return (
        <div className='flex-1 flex items-center justify-center  order-1 xl:order-none mb-8 xl:mb-0'>
        {/* // flex-1 flex items-center justify-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0 */}
        
            <ul className='grid grid-cols-2 gap-10'>
                {about.map((item,index)=>{
                    return (
                    <li key={index} className='flex items-center gap-6 '>
                        <div className='w-[52px] h-[52px] xl:w-[52px] xl:h-[52px] bg-[#27272c] text-accent rounded-md flex items-center justify-center'>
                            <div className='text-[28px]'>{item.icon}</div>
                        </div>
                        <div className='flex-1'>
                            <div className='text-white/60'>{item.fieldName}</div>

                            <h3 className='text-xl'>{item.fieldValue}</h3>
                        </div>
                    </li>
                    );
                })}
            </ul>
        
        </div>
    )
}

export default Contact;
"use client"
import React from 'react'
import CountUp from "react-countup"
import axios from 'axios';
import date from 'date-and-time';

const now = new Date();
var target= date.format(now, 'YYYY')- 2018;

const stats = [
    {
        num: target,
        text: "Years of programming experience",
    },
    {
        num: 15,
        text: "Projects Completed",

    },
    {
        num: 4,
        text: "Computer Languages Mastered",

    },
    {
        num: 770,
        text: "Code Commit contributions",
    },
]

const Stats = () => {
    return (
        <section>
            <div className='container mx-auto'>
                <div className='flex flex-wrap gap-6  max-w-[80vw] mx-auto xl:max-w-none'>
                    {stats.map((item, index) =>{
                        return (
                            <div className="flex-1 flex gap-4 items-center justify-center" key={index} >
                                <CountUp
                                end={item.num}
                                duration={5}
                                delay={2}
                                className='text-4xl xl:text-6xl font-extrabold'
                                />
                                <p>{item.text}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>  
    )
}

export default Stats
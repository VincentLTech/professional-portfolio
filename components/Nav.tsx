"use client";
import React from 'react'
import Link from "next/link";
import { usePathname  } from "next/navigation";

const links = [
    {
        name: 'home',
        path: '/',

    },
    {
        name: 'services',
        path: '/services',

    },
    {
        name: 'resume',
        path: '/resume',

    },
    {
        name: 'experience',
        path: '/experience',

    },
    {
        name: 'contact',
        path: '/contact',

    },

]



const Nav = () => {
    //pathname can be used to insert className style properties to a map BASED on what route you are in
    //Definition: pathname represents the actual route path or URL pattern defined in your Next. js application. 
    // Usage: It corresponds to the path as defined in the pages folder, without query parameters or dynamic route values
    const pathname = usePathname()
    console.log(pathname);
    return (
        <nav className="flex gap-8 ">
            {links.map((link, index)=>{
                return <Link href={link.path} key={index} 
                className={`${
                    link.path === pathname && "text-accent  border-b-4 border-accent"//this puts a line under the nav that you are currently in
                }   
                capitalize font-medium hover:text-accent transition-all
                `} 
                //the -accent is from the default color in tailwind.config
                // .text-accent {
                //     --tw-text-opacity: 1;
                //     color: rgb(0 255 153 / var(--tw-text-opacity, 1)) /* #00ff99 */;
                // }
                // .border-b-4 {
                //     border-bottom-width: 4px;
                // }
                //tailwind config
                // .border-accent {
                //     --tw-border-opacity: 1;
                //     border-color: rgb(0 255 153 / var(--tw-border-opacity, 1)) /* #00ff99 */;
                // }
                //this makes hover effect much color smoother
                // .transition-all {
                //     transition-property: all;
                //     transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
                //     transition-duration: 150ms;
                // }
                >{link.name}</Link>
            })}
        </nav>
    )
}

export default Nav
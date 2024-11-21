"use client";
import React from 'react'
import Link from "next/link";
import {Sheet, SheetContent, SheetTrigger} from '@/components/ui/sheet'
import { usePathname  } from "next/navigation";
import {CiMenuFries } from "react-icons/ci";

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



const MobileNav = () => {
    //pathname can be used to insert className style properties to a map BASED on what route you are in
    //Definition: pathname represents the actual route path or URL pattern defined in your Next. js application. 
    // Usage: It corresponds to the path as defined in the pages folder, without query parameters or dynamic route values
    const pathname = usePathname()
    console.log(pathname);
    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center">
                <CiMenuFries className="text-[32px] text-accent"/>
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                <div className='mt-32 mb-40 text-center text-2xl'>
                    <Link href="/" className="text-4xl font-semibold">
                        <h1>Vincent<span className='text-accent'>(V)</span></h1>
                    </Link>
                </div>
                <nav className='flex flex-col justify-center items-center gap-8'>
                    {links.map((link, index)=>{
                        return (
                            <Link 
                                href={link.path} 
                                key= {index} 
                                className={`${link.path === pathname &&
                                    " text-accent text-xl border-b-4 border-accent"}
                                    capitalize haver:text-accent transition-all
                                `}
                            >  
                                {link.name}
                            </Link>
                        );
                    })}
                </nav>
            </SheetContent>
            
        </Sheet>
    )
}

export default MobileNav;
import React from 'react'
import Link from "next/link";

//all shadcn components
import { Button } from  './ui/button';
import Nav  from './Nav';
import MobileNav from './MobileNav';
const Header = () => {
    return (
        <header className=" py-8 xl:py-12 text-white">
            <div className="container mx-auto flex justify-between items-center">
                {/* this will be the logo */}
                <Link href='/'>
                    <h1 className="text-4xl font-semibold">
                        Vincent
                        <span className="text-accent">(V)</span>
                    </h1>
                </Link>
                {/* this nav will appear when you are using desktop */}
                <div className="hidden xl:flex items-center gap-8">
                    <Nav/>
                    <Link href="/contact">
                        <Button>Vector</Button>
                    </Link>
                </div>
                {/* this will appear when you switch to a mobile section */}
                <div className='xl:hidden'>
                    <MobileNav/>
                </div>
            </div>   
        </header>
    )
}

export default Header
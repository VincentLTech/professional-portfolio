import React from 'react'

//icons and components
import { Button } from "@/components/ui/button";
import {FiDownload} from "react-icons/fi";
import Socials from '@/components/Socials';
import Photo from '@/components/Photo';
import Stats from '@/components/Stats';
const Home = () => {
  return (
    <section className='h-full'>
      <div className='container mx-auto h-full'>
        <div className='flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24'>
          <div className="text-center xl:text-left order-2 xl:order-none">
            {/* order-2 xl:order-none is a mobile feature */}
            <span>Full Stack Software Developer</span>
            <h1 className='h1'>
              Hi! 
              <br className='xl:invisible max-xl:visible'/>
              My name is 
              <br/>
              <span className='text-accent'>Vincent Lau</span>
              </h1>
              <p className="max-w-[500px] mb-9 text-white/80">
                I am proficient in Next.js and React.js development
                and I am also skilled at UX/Ui Designing and organizing teams and dedigating tasks to my co-workers.
                I love piano and creating music sheets and guides so many others can learn how to play it.
              </p>

              <div className='flex flex-col xl:flex-row items-center gap-8'>
                <Button 
                  variant="outline"
                  size="lg" 
                  className='uppercase flex items-center gap-2 '
                >
                  <span> Download CV </span>
                  <FiDownload className='text-xl '/>
                </Button>
                <div className='mb-8 xl:mb-0'>
                  <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"/>
                </div>
              </div>
          </div>
          <div className='order-1 xl:order-none mb-8 xl:mb-0'>
            <Photo/>
          </div>
        </div>
      </div>
      <Stats/>
    </section>
  )
}

export default Home
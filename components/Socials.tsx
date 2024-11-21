import React from 'react'
import Link from 'next/link';
import { FaGithub, FaLinkedinIn, FaYoutube, FaFacebook} from "react-icons/fa";
const socials = [
    {icon: <FaGithub/>, path:"https://github.com/VincentLTech"},
    {icon: <FaLinkedinIn/>, path:"https://www.linkedin.com/in/vincent-lau-cs/"},
    {icon: <FaYoutube/>, path:"https://www.youtube.com/@God-Loves-Musicians"},
    {icon: <FaFacebook/>, path:"https://www.facebook.com/vincent.lau.984991"}



]
const Socials = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>

        {socials.map((item,index)=>{
            return <Link key={index} href={item.path} className={iconStyles}>{item.icon}</Link>
        })}
    </div>
  )
}

export default Socials
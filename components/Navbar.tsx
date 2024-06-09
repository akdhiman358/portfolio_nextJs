
import { cn } from '@/lib/cn';
import Link from 'next/link';
import React from 'react'
import { SiGithub,SiLinkedin, SiX,  } from "react-icons/si";
function    Navbar({className}:{className? : string}) 
{
    const socials = [
        {
            link:"https://linkedin.com/in/akshay-u-d",
            icon: SiLinkedin ,
            label:'LinkedIn',

        },
        {
            link:"https://github.com/akdhiman358",
            icon:SiGithub,
            label:'Github',

        },
        {
            link:"https://x.com/Akshay_u_d",
            icon: SiX,
            label:'X',

        },
    ]   
  return (  
<nav className={cn('py-10 flex justify-between items-center',className)}>
    <h1 className='text-2xl underline underline-offset-8 decoration-green-500 rotate-6 hover:-rotate-0'>Akshay 🧔🏻</h1>

    <div className='flex gap-5 items-center'>
        {socials.map((item,index)=>(
            <Link href={item.link} key={index} aria-label='item.label'>
                <item.icon className='h-5 w-5 hover:scale-150 transition-all'/>
            </Link>
        ))}
    </div>
</nav>
  )
}

export default Navbar
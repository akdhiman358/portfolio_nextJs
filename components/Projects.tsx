
import React from 'react'
import { FaReact } from "react-icons/fa";
import { TbBrandTypescript } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import Title from './Title';
import Link from 'next/link';
import { cn } from "@/lib/cn";
import { DirectionAwareHover } from './ui/card';
import { Key } from 'lucide-react';


  


function Projects() {
    const projects =[
        {
            title:' gpt-3 Landing Page',
            tech:[FaReact,TbBrandTypescript,SiTailwindcss],
            link:'https://travelcampingage.netlify.app/',
            cover:'/images/project-1.png',
            background:'bg-indigo-200'
        },
        {
            title:'HiLink',
            tech:[FaReact,TbBrandTypescript,SiTailwindcss],
            link:'https://travelcampingage.netlify.app/',
            cover:'/images/project-2.png',
            background:'bg-indigo-500'
        },
        {
            title:'Recipes App',
            tech:[FaReact,TbBrandTypescript,SiTailwindcss],
            link:'https://cook-with-recipe.netlify.app/',
            cover:'/images/project-3.png',
            background:'bg-indigo-200'
        },
        {
            title:'Tenzies Game',
            tech:[FaReact,TbBrandTypescript,SiTailwindcss],
            link:'https://magical-sunflower-143769.netlify.app/',
            cover:'/images/project-4.png',
            background:'bg-indigo-500'
        },
    ]
  return (
    
        <div className='py-10 px-5'>
            <Title text='Projects ⚒️' className='flex flex-col items-center rotate-[-8deg]'></Title>
            <div className='grid grid-cols-1 lg:grid-cols-2 pt-20 gap-5'>
                {projects.map((project,idx)=>(
                    <Link href={project.link} key={idx}>
                        <div className={cn(" p-5 rounded-md ",project.background)  }>
                            <DirectionAwareHover
                                imageUrl={project.cover}
                                className='w-full space-y-5 cursor-pointer'
                                >
                            <div className='space-y-2'>        
                                <h2 className='text-2xl font-bold '>{project.title}</h2>
                                <div className='flex gap-2 items-center'>
                                    {
                                        project.tech.map((Icon, idx)=>{
                                        return  <Icon key={idx}
                                                    className='h-8 w-8'
                                                    />
                                            
                                        
                                        })
                                    }
                                </div>
                            </div>    
                            </DirectionAwareHover>
                        
                        </div>
                    </Link>
                ))}
            </div>

        </div>
    
  )
}

export default Projects
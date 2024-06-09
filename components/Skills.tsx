import React from 'react'
import Title from './Title'
import { HoverEffect } from './ui/hoverEffect'
import { FaReact } from "react-icons/fa";
import { SiCss3, SiGit, SiHtml5, SiJavascript, SiNextdotjs, SiReactrouter, SiTailwindcss } from "react-icons/si";

function Skills() {
  const skills =[
   {
    text:'React',
    Icon:FaReact
   },
   {
    text:'HTML 5',
    Icon:SiHtml5
   },
   {
    text:'Javascript',
    Icon:SiJavascript
   },
   {
    text:'Css',
    Icon:SiCss3
   },
   {
    text:'Next',
    Icon:SiNextdotjs 
   },
   {
    text:'Tailwind',
    Icon:SiTailwindcss
   },
   {
    text:'Git',
    Icon:SiGit
   },
   {
    text:'React Router',
    Icon:SiReactrouter
   },
   
   
  ]
  return (
    <div className='max-w-5xl mx-auto px-8  '>
        <Title text='Skills 🤹🏻' className='flex flex-col items-center rotate-[-8deg]'></Title>
        <HoverEffect items = {skills}/>
    </div>
  )
}

export default Skills
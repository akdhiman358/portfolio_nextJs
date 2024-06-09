 import Link from 'next/link'
import React from 'react'
import { MovingBorder, MovingButton } from './ui/moving-border'
import Title from './Title'
import {motion} from 'framer-motion'
import { TextGenerateEffect } from './ui/text-generate' 



 function HeroSection() {
   return (
     <div className='flex justify-between flex-col-reverse gap-14 lg:gap-0 lg:flex-row items-center min-h-[60vh] '>
        <div className='space-y-10 text-center lg:text-left'>
            <h1 className='text-3xl lg:text-7xl font-bold '>
                Nice to meet you.! 👋🏼
                <br /> <span className='underline underline-offset-8 decoration-green-400 '> {"I'm Akshay..."}</span>
            </h1>

            <div className='md:w-96 text-lg text-gray-300 '>
                <TextGenerateEffect words={
                    "Based in India, I'm a Software Developer passionate about building modern web applications that users love."
                }/>
                
            </div>

            <Link href={"mailto:akdhiman358@gmai.com"}
            className='inline-block group'> 
            <Title text='Contact me 📲' className=''></Title>
            </Link>

        </div>
        <div>
            <div className='w-72 h-72 space-y-3 -rotate-[30deg] relative'>
                <div className='flex gap-3 translate-x-8'>

                

                    <motion.div 
                     animate={{ rotate: 360 }} // Rotate 360 degrees
                     transition={{ duration: 2, loop: Infinity, ease: "linear" }} // Set animation duration, looping, and easing
                    
                    className='w-32 h-32 rounded-2xl bg-green-500'></motion.div>
                    <motion.div
                        animate={{ scale: [1, 1.2, 1] }} // Expands to 1.5x size, then shrinks back to 1x
                        transition={{ duration: 2,loop: Infinity, yoyo: Infinity }} // Set duration, loop back and forth
                        className='w-32 h-32 rounded-full bg-indigo-500'></motion.div>
                </div>
                <div className='flex gap-3 -translate-x-8'>

                    <motion.div
                    animate={{ rotate: 360 }} // Rotate 360 degrees
                    transition={{ duration: 2, loop: Infinity, ease: "linear" }} // Set animation duration, looping, and easing
                   
                     className='w-32 h-32 rounded-2xl bg-indigo-500'></motion.div>
                     <motion.div
                        animate={{ scale: [1, 1.2, 1] }} // Expands to 1.5x size, then shrinks back to 1x
                        transition={{ duration: 2,loop: Infinity, yoyo: Infinity }} // Set duration, loop back and forth
                        className='w-32 h-32 rounded-full bg-green-500'></motion.div>
                </div>
                
                <div className='glow absolute right-1/2 top-1/2 -z-10'></div>
            </div>
            <MovingButton 
            borderRadius='0.5rem'
            className='bg-black font-semibold'>
                <p>🛠️ Available for Work</p>
            </MovingButton>
        </div>
     </div>
   )
 }
 
 export default HeroSection
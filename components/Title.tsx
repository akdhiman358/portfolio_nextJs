import React from 'react'

function Title({text,className}:{text:string,className:string}) {
  return (
    <div className={className}>

    <h2 className='text-3xl font-bold group-hover:text-yellow-500'>
        {text}
    </h2>
            <div className='w-40 h-2 bg-green-500 translate-x-3 rounded-sm  '> </div>
            <div className='w-40 h-2 bg-indigo-500 -translate-x-3 rounded-sm'> </div>
           

    </div>
  )
}

export default Title
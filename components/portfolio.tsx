import React from 'react'
import Image from 'next/image'
import data from '../data/mywork.json'

export default function Portfolio() {

  const work = data.map(o => (
    <div key={o.title} className='w-[500px] mt-10 flex flex-col'>
      <div className='mx-2 h-[550px] flex flex-col p-2 rounded-md shadow-2xl justify-between'>
        <div className='h-[220px] bg-red-900 object-cover overflow-hidden border shadow-xl'>
          <Image 
            src={`/${o.photo}`}
            width={500}
            height={300}
            alt='portfolio'
          /></div>
        <p className='text-xl text-center font-semibold'>{o.title}</p>
        <p className='h-24'>{o.description}</p>
        <p className='flex flex-wrap '>
          {o.technologies.map(t => (
            <span key={t} className='px-1 text-white bg-gray-500 rounded-sm m-[1px]'>{t}</span>
          ))
        
          }
        </p>
        <a href={o.link} className='border-2 border-[#423e59] text-center py-2 text-xl cursor-pointer duration-150 bg-[#423e59] text-white hover:bg-white hover:text-black'>View site</a>
      </div>
    </div>

  ))
  return (
    <div className='lg:w-[1140px] mx-auto'>
        <div className='my-20'>
            <span className='bg-[#423e59] text-3xl py-2 px-5 text-white'>My Work</span>
            <div className='flex w-full flex-wrap items-center justify-center'>
              {work}
              <div></div>
              <div></div>
            </div>
    </div>
    </div>
  )
}

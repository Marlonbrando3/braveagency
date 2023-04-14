import React from 'react'
import Image from 'next/image'
import data from '../data/mywork.json'

export default function Portfolio() {

  const work = data.map(o => (
    <div key={o.title} className='lg:w-[500px] w-[800px] mt-10 flex flex-col'>
      <div className='mx-2 lg:h-[650px] flex flex-col p-2 rounded-md shadow-2xl justify-between'>
        <div className='lg:h-[290px] bg-red-900 relative overflow-hidden border shadow-xl'>
          <Image className='object cover'
            src={o.photo}
            width={800}
            height={500}
            alt='portfolio'
          /></div>
        <p className='text-xl text-center font-semibold'>{o.title}</p>
        <p className='h-24'>{o.description}</p>
        <p className='flex flex-wrap my-3 lg:my-0'>
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
    <>
    <div id="mywork" className='bg-red-900 h-0 w-full'></div>
    <div className='lg:w-[1140px] md:w-auto mx-auto'>
        <div className='my-44'>
          <div className='w-[1140px] mx-auto text-3xl px-2 text-white'><span className='text-[#c5915b] font-bold text-xl py-1'>Portfolio</span>
          <div className='text-[#423e59] text-3xl font-[600] pt-4'>Get to know my projects all of them are still more or less on developing step.</div>
        </div>
            <div className='flex w-full flex-wrap items-center justify-center'>
              {work}
              <div></div>
              <div></div>
            </div>
    </div>
    </div>
    </>
  )
}

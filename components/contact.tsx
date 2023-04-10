import React from 'react'

export default function contact() {
  return (
    <div className='lg:w-[1140px] mx-auto relative my-32'>
      <div className='flex w-full lg:flex-row flex-col'>
        <div className='h-28 mt-36 lg:w-[200px] w-[20px] relative'>
          <div className='bg-[#423e59] lg:text-[100px] text-[60px] absolute lg:rotate-90 lg:h-[108px] h-[80px] lg:mt-0 mt-[60px] left-[1px] text-white whitespace-nowrap'>Write me.</div>
        </div>
        <form className='lg:w-8/12 w-11/12 form-style p-8 bg-[#423e59] flex flex-col'>
          <input className='input  lg:ml-10 my-2 p-2' placeholder='your name'></input>
          <input className='input  lg:ml-10 my-2 p-2' placeholder='your emial'></input>
          <input className='input  lg:ml-10 my-2 p-2' placeholder='your phone number'></input>
          <textarea className='input h-[160px]  lg:ml-10 my-2 p-2' placeholder='your message e.g. how can i help you?'></textarea>
          <button className='bg-white text-[#423e59] rounded-md py-3 text-2xl font-bold mt-10'>Send</button>
        </form>
      </div>
    </div>
  )
}

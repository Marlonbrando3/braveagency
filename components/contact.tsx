import React from 'react'
import { useRef } from 'react';

export default function contact() {

  const name:any = useRef();
  const phone:any = useRef();
  const email:any = useRef();
  const msg:any = useRef();

  const handleFormSending = (e:any) => {

    console.log("przed fetch")

    e.preventDefault();
    fetch('/api/sendform', {
      method:'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body:JSON.stringify({
        name: name.current.value,
        email: email.current.value,
        phone: phone.current.value,
        msg: msg.current.value
      })
    })
  }


  return (
    <>
    <div id="contact" className='h-[1px] w-full'></div>
    <div className='lg:w-[1140px] mx-auto relative mb-4 lg:my-28'>
      <div className='flex w-full lg:flex-row flex-col'>
        <div className='h-28 lg:mt-36 lg:w-[200px] w-[20px] relative'>
          <div className='bg-[#423e59] lg:text-[100px] text-[60px] absolute lg:rotate-90 lg:h-[108px] h-[80px] lg:mt-0 mt-[60px] left-[1px] text-white whitespace-nowrap'>Write me.</div>
        </div>
        <form onSubmit={handleFormSending} className='lg:w-8/12 w-11/12 form-style p-8 bg-[#423e59] flex flex-col'>
          <input ref={name} className='input lg:ml-10 my-2 p-2' type="text" placeholder='your name' required></input>
          <input ref={email} className='input lg:ml-10 my-2 p-2' type="email" placeholder='your email' required></input>
          <input ref={phone} className='input lg:ml-10 my-2 p-2' type="number" placeholder='your phone number'></input>
          <textarea ref={msg} className='input h-[160px]  lg:ml-10 my-2 p-2' placeholder='your message e.g. how can i help you?'></textarea>
          <button className='border border-text-[#423e59] bg-white text-[#423e59] rounded-md py-3 text-2xl duration-300 font-bold mt-10 hover:bg-[#423e59] hover:text-white'>Send</button>
        </form>
      </div>
    </div>
    </>
  )
}

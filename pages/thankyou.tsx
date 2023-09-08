import React from 'react'
import Image from 'next/image'
import { useRef } from 'react';

export default function Thankyou () {

  const submitButton:any = useRef();
  const phone:any = useRef();

  const handleFormSending = async(e:any) => {

    console.log("przed fetch")

    e.preventDefault();
    const res = await fetch('/api/sendnumber', {
      method:'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body:JSON.stringify({
        phone: phone.current.value,

      })
    })
    const data = await res.json()
    console.log(data.info)

    if(data.info === 'true') {
      setTimeout(() => {
        submitButton.current.innerText = "Zapisano!"
      }, 350)

    } else {
      submitButton.current.innerText = "Coś poszło nie tak"
    }
  }


  return (
    <div className='w-screen h-screen'>
        <div className='h-[90%] w-[70%] flex flex-col items-center justify-center mx-auto'>
        <div className="my-[20px]">
          <Image 
            src="/Brave_logo-white.png"
            width={200}
            height={100}
            alt="wearebrabve"
          />
        </div>
            <p className='text-[30px] leading-9 mb-[40px]'>Dziękujemy za wyrażenie chęci do rozmowy. </p>
            <p>Proszę zostaw numer kontaktowego poniżej abym mógł oddzwonić.</p>
            <form onSubmit={handleFormSending}>
              <input ref={phone} className='border-2 w-full h-[40px] rounded-[10px] my-[20px] px-[10px]' placeholder='Twój numer telefonu' data-type="phone"></input>
              <button ref={submitButton} className='border border-green-600 w-full bg-green-600 text-white py-[10px] rounded-md mb-[20px] duration-200 hover:bg-white hover:text-green-600 ' >Zapisz numer</button>
            </form>
            <p>Pozdrawiamy, zespół <b>We Are Brave.</b></p>
        </div>
    </div>
  )
}

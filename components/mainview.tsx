"use client";
import { type } from 'os'
import React, { useEffect } from 'react'
import Link from 'next/link'
import { useState } from 'react'
import img from '../public/bg-home-1.jpeg'
import {BsBoxArrowInRight} from 'react-icons/bs'

export default function Mainview() {


  type Works = {
    text: string,
    status: boolean
  }

  // const [actualWork, setAcutalWork] = useState<number>(1)
  const [MyWork, setMyWork] = useState<Works[]>([
      {
        text:"Digital Marketer",
        status:true
      },
      {
        text:"Web developer",
        status:false
      },
      {
        text:"Coffeholic",
        status:false
      },
      {
        text:"Freelancer",
        status:false
      },
      {
        text:"Saller",
        status:false
      },
      {
        text:"Traveler",
        status:false
      },
      {
        text:"Real Estate",
        status:false
      },
      {
        text:"Fotographer",
        status:false
      },
  ])


  const handleArray = () => {

      let actualWork:number = 0

      setInterval(() => {
        actualWork = actualWork +1
      
      const newMyWorkArray = MyWork.map((w, index) => {
        if(actualWork < MyWork.length){
        if(w.status === true){
          return {
            ...w,
            status:false,
          }
        } 
        if(index === actualWork){
            return {
              ...w,
              status:true,
            }
        } else return w 

        } else {
          actualWork = 0
          if(index === 0){
            return {
            ...w,
            status:true,
          }
          } else {
             return {
              ...w,
              status:false,
          } 
        }}

    })
      setMyWork(newMyWorkArray)

    },1500)
  }

  useEffect(() => {
    handleArray();
  },[])

  return (
    <div className="bg-[url('/bg-home-2.jpeg')] lg:bg-[length:1900px] md:bg-[length:1000px] bg-[length:900px] bg-center bg-no-repeat md:bg-left h-screen flex justify-center items-center mr-24 -mt-12 rounded-r-[50px]">
      <div className="absolute right-0 w-24 h-full flex items-end justify-center pb-20">
        <div className='flex justify-center items-center text-3xl whitespace-nowrap rotate-90 duration-300 hover:pl-10 cursor-pointer'>
          <Link href="/#aboutus"><p className='px-3 smooth relative'>Let&apos;s go!</p></Link>
          <BsBoxArrowInRight className='w-[40px] h-[40px]' />
        </div>
        </div>
        <div className=' text-white w-[1140px] lg:h-auto h-[100px]'>
            <p className='text-5xl font-[500] md:pl-0 pl-2'>Welcome in my world of</p>
            {MyWork.map(w => {
              if(w.status === true){
                return (
                  <p key={w.text} className='md:pl-0 pl-2 text-[50px] sm:text-[55px] leading-[55px] md:text-6xl font-[200] text-shadow-[10px] duration-150'>{w.text}</p>
                )
              }
            })}
        </div>
    </div>
  )
}

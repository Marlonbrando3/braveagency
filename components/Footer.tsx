import React from 'react'
import {AiFillHeart} from 'react-icons/ai'
import {BiCopyright} from 'react-icons/bi'

export default function Footer() {
  return (
    <div className='w-full bg-[#423e59]'>
    <div className='w-[1140px] mx-auto'>
        <div className='whitespace-nowrap flex text-thin items-center justify-start text-white'>
            <span className='px-2'> Made by Brave with </span><AiFillHeart /> 
            <span className='px-2'>in 2023 
            </span>
            <BiCopyright /></div>
    </div>
    </div>
  )
}

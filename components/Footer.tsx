import React from 'react'
import Link from 'next/link'
import {AiFillHeart} from 'react-icons/ai'
import {BiCopyright} from 'react-icons/bi'
import {BsWhatsapp} from 'react-icons/bs'
import {BsMessenger} from 'react-icons/bs'
import {BsFillPhoneFill} from 'react-icons/bs'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import {AiFillFacebook} from 'react-icons/ai'
import {GrMail} from "react-icons/gr"

export default function Footer() {
  
  return (
    <div className='w-full bg-[#423e59]'>
    <div className='lg:w-[1040px] lg:h-[240px] w-sreen h-[440px] lg:mx-auto flex flex-col items-center justify-center mx-[10px] '>
      <div className=' w-full'>
        <div className='w-full h-4/6 whitespace-nowrap flex lg:flex-row flex-col text-thin items-start justify-center text-white'>
            <div className='flex flex-col items-start mb-[20px] w-1/2'>
              <p className='uppercase font-bold mb-2'>Shortcuts</p>
              <ul className='flex text-white justify-between'>
                <Link href="/#aboutus"><li className='list-item-style-footer text-xl'>About me</li></Link>
                <Link href="/#mywork"><li className='list-item-style-footer text-xl'>My Work</li></Link>
                <Link href="/#contact"><li className='list-item-style-footer text-xl'>Contact</li></Link>
              </ul>
              <div className='flex items-center'>
                    <Link href="https://wa.me/+48669752525"><li className='list-icons-style'><BsWhatsapp className='w-full h-full'/></li></Link>
                    <Link href="https://m.me/100001436277972"><li className='list-icons-style'><BsMessenger className='w-full h-full'/></li></Link>
                    <Link href="tel:+48669752525"><li className='list-icons-style'><BsFillPhoneFill className='w-full h-full'/></li></Link>
                </div>
            </div>
            <div className='w-1/3 lg:my-0 mb-[20px]'>
                <p className='uppercase font-bold mb-2'>Socials</p>
                <div className='flex'>
                  <Link href="https://www.linkedin.com/in/marek-marszalek/"><span className='w-[40px] h-[40px]'><AiFillLinkedin className='w-[40px] h-[40px]' /></span></Link>
                  <Link href="https://github.com/Marlonbrando3"><span className='w-[40px] h-[40px]'><AiFillGithub className='w-[40px] h-[40px]'/></span></Link>
                  <Link href="#"><span className='w-[40px] h-[40px] text-gray-300'><AiOutlineTwitter className='w-[40px] h-[40px]'/></span></Link>
                  <Link href="#"><span className='w-[40px] h-[40px] text-gray-300'><AiFillFacebook className='w-[40px] h-[40px]'/></span></Link>
                </div>
            </div>
            <div className='h-10 w-1/2 lg:my-0 my-4'>
              <p className='uppercase font-bold mb-2'>Contact details</p>
              <div className='flex items-center'>
                <GrMail />
                <p className='ml-2'>+48 669 75 25 25</p>
              </div>
              <div className='flex items-center'>
                <BsFillPhoneFill />
                <p className='ml-2'>m.marszalek@wearebrave.pl</p>
              </div>  
            </div>
          </div>
    </div>
      <div className='flex w-full items-end justify-end text-white'>
              <div className='flex items-center'>
                <BiCopyright />
                <span className='px-2'>2023 Brave. All right reserved.</span>
              </div>
            </div>
    </div>
    </div>
  )
}

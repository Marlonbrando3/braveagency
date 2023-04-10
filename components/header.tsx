
"use client";

import React, { useState, useRef } from 'react'
import Image from 'next/image'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import {AiFillFacebook} from 'react-icons/ai'
import {BsWhatsapp} from 'react-icons/bs'
import {BsMessenger} from 'react-icons/bs'
import {BsFillPhoneFill} from 'react-icons/bs'
import {BsMoonFill} from 'react-icons/bs'
import {AiOutlineMenuFold } from 'react-icons/ai'
import {AiOutlineMenu} from 'react-icons/ai'
import { BiMobile } from 'react-icons/bi';

export default function Header() {

    const menuMobile:any = useRef();

    const[mobileMenu, setmobileMenu] = useState<boolean>(false)

    const handleMobileMenu = () => {

        console.log("click")

        setmobileMenu(!mobileMenu)
        console.log(menuMobile.current.style.left)

        if(menuMobile.current.style.left === '' || menuMobile.current.style.left === "-110%") {
            console.log("pierwszy")
            menuMobile.current.style.left = "0%"
        } 

        else {
            console.log("drugi")
            menuMobile.current.style.left = "-110%"
        }
    }

  return (
    <div className="bg-white/[0.5] w-full fixed z-20 mt-12 flex justify-end items-center pr-8">
        <nav ref={menuMobile} id="mobile" className='absolute bg-white w-screen h-screen duration-300 top-20 -left-[110%] flex flex-col items-center  justify-center'>
            <ul className='flex flex-col text-xl justify-evenly items-center'>
                <li className='list-item-style text-3xl'>About me</li>
                <li className='list-item-style text-3xl'>My Work</li>
                <li className='list-item-style text-3xl'>Contact</li>
                <div className='flex ml-8'>
                    <li className='list-icons-style'><BsWhatsapp className='w-full h-full'/></li>
                    <li className='list-icons-style'><BsMessenger className='w-full h-full'/></li>
                    <li className='list-icons-style'><BsFillPhoneFill className='w-full h-full'/></li>
                </div>
            </ul>
            <div className='flex items-center justify-center mt-10'>
                <span className='w-[40px] h-[40px]'><AiFillLinkedin className='w-[40px] h-[40px]' /></span>
                <span className='w-[40px] h-[40px]'><AiFillGithub className='w-[40px] h-[40px]'/></span>
                <span className='w-[40px] h-[40px]'><AiOutlineTwitter className='w-[40px] h-[40px]'/></span>
                <span className='w-[40px] h-[40px]'><AiFillFacebook className='w-[40px] h-[40px]'/></span>
            </div>
        </nav>
        <div className='w-[1200px] h-24 flex justify-between items-center mr-12'>
            <Image 
                src="/Brave_logo-white.png"
                width={220}
                height={150}
                alt="Brave Agency"
                key={"kolo"}
            />
        <nav className='hidden lg:block'>
            <ul className='flex text-xl justify-evenly items-center'>
                <li className='list-item-style'>About me</li>
                <li className='list-item-style'>My Work</li>
                <li className='list-item-style'>Contact</li>
                <div className='flex ml-8'>
                    <li className='list-icons-style'><BsWhatsapp className='w-full h-full'/></li>
                    <li className='list-icons-style'><BsMessenger className='w-full h-full'/></li>
                    <li className='list-icons-style'><BsFillPhoneFill className='w-full h-full'/></li>
                </div>
            </ul>
        </nav>
        </div>
        <div className='w-[40px] h-[40px] flex flex-wrap'>
            <span className='w-[40px] h-[40px] hidden lg:block'><AiFillLinkedin className='w-full h-full' /></span>
            <span className='w-[40px] h-[40px] hidden lg:block'><AiFillGithub className='w-full h-full'/></span>
            <span className='w-[40px] h-[40px] hidden lg:block'><AiOutlineTwitter className='w-full h-full'/></span>
            <span className='w-[40px] h-[40px] hidden lg:block'><AiFillFacebook className='w-full h-full'/></span>
            <div className='w-[40px] h-[40px] lg:hidden block cursor-pointer' onClick={handleMobileMenu}>
                {mobileMenu ? 
                    <li className='w-[40px] h-[40px] list-none '><AiOutlineMenuFold className='w-full h-full'/></li> 
                    :<li className='w-[40px] h-[40px] list-none'><AiOutlineMenu className='w-full h-full'/></li>}
            </div>
        </div>
    </div>
  )
}

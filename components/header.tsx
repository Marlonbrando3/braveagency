import React, { useState, useRef, useEffect, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link';
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

    const nav:any = useRef();

    const headerHeighCalc = () => {
        console.log("działa se")
    }

    const menuMobile:any = useRef();
    const[mobileMenu, setmobileMenu] = useState<boolean>(false)

    const handleMobileMenu = () => {

        setmobileMenu(!mobileMenu)

        if(menuMobile.current.style.left === '' || menuMobile.current.style.left === "-110%") {
            menuMobile.current.style.left = "0%"
        } 

        else {
            menuMobile.current.style.left = "-110%"
        }
    }

    const handleChooseMobileMenuOption = () => {
        setmobileMenu(false)
        menuMobile.current.style.left = "-110%"
    }


    const onScroll = useCallback(() => {

        if(window.pageYOffset > 150){
            nav.current.className = 'short-menu'

        } else {
            nav.current.className = "tall-menu"

        };
        console.log(window.pageYOffset )
      }, []);
    
      useEffect(() => {
        window.addEventListener("scroll", onScroll);
      }, []);

  return (
    <div ref={nav} className="lg:bg-white/[0.5] bg-white h-[100px] w-full fixed z-20 mt-12 flex justify-end items-center transition-transform duration-150 pr-8">
        <nav ref={menuMobile} id="mobile" className='absolute bg-white w-screen h-screen duration-300 top-20 -left-[110%] flex flex-col items-center justify-center'>
            <ul className='flex flex-col text-xl justify-center items-center'>
                <Link onClick={handleChooseMobileMenuOption} href="/#aboutus"><li className='list-item-style text-3xl'>About me</li></Link>
                <Link onClick={handleChooseMobileMenuOption} href="/#mywork"><li className='list-item-style text-3xl'>My Work</li></Link>
                <Link onClick={handleChooseMobileMenuOption} href="/#contact"><li className='list-item-style text-3xl'>Contact</li></Link>
                <div className='flex items-center'>
                    <Link href="https://wa.me/+48669752525"><li className='list-icons-style'><BsWhatsapp className='w-full h-full'/></li></Link>
                    <Link href="https://m.me/100001436277972"><li className='list-icons-style'><BsMessenger className='w-full h-full'/></li></Link>
                    <Link href="tel:+48669752525"><li className='list-icons-style'><BsFillPhoneFill className='w-full h-full'/></li></Link>
                </div>
            </ul>
            <div className='flex items-center justify-center mt-10'>
                <span onClick={handleChooseMobileMenuOption} className='w-[40px] h-[40px] cursor-pointer'><AiFillLinkedin className='w-[40px] h-[40px]' /></span>
                <span onClick={handleChooseMobileMenuOption} className='w-[40px] h-[40px] cursor-pointer'><AiFillGithub className='w-[40px] h-[40px]'/></span>
                <span className='w-[40px] h-[40px]'><AiOutlineTwitter className='w-[40px] h-[40px] text-gray-300'/></span>
                <span className='w-[40px] h-[40px]'><AiFillFacebook className='w-[40px] h-[40px] text-gray-300'/></span>
            </div>
        </nav>
        <div className='w-full  h-24 flex justify-between items-center mr-12'>
            <Link href="/"><Image 
                src="/Brave_logo-white.png"
                width={220}
                height={150}
                alt="Brave Agency"
                key={"kolo"}
            /></Link>
        <nav className='hidden lg:block'>
            <ul className='flex text-xl justify-evenly items-center'>
                <Link href="#aboutus"><li className='list-item-style'>About me</li></Link>
                <Link href="#mywork"><li className='list-item-style'>My Work</li></Link>
                <Link href="#contact"><li className='list-item-style'>Contact</li></Link>
                <div className='flex ml-8'>
                    <Link href="https://wa.me/+48669752525"><li className='list-icons-style'><BsWhatsapp className='w-full h-full'/></li></Link>
                    <Link href="https://m.me/100001436277972"><li className='list-icons-style'><BsMessenger className='w-full h-full'/></li></Link>
                    <Link href="tel:+48669752525"><li className='list-icons-style'><BsFillPhoneFill className='w-full h-full'/></li></Link>
                </div>
            </ul>
        </nav>
        </div>
        <div className='w-[40px] lg:mt-32 mt-0 flex flex-wrap  bg-white'>
            <Link href="https://www.linkedin.com/in/marek-marszalek/"><span className='w-[40px] h-[40px] hidden lg:block'><AiFillLinkedin className='w-full h-full' /></span></Link>
            <Link href="https://github.com/Marlonbrando3"><span className='w-[40px] h-[40px] hidden lg:block'><AiFillGithub className='w-full h-full'/></span></Link>
            <Link href="#"><span className='w-[40px] h-[40px] hidden lg:block text-gray-300'><AiOutlineTwitter className='w-full h-full'/></span></Link>
            <Link href="#"><span className='w-[40px] h-[40px] hidden lg:block text-gray-300'><AiFillFacebook className='w-full h-full'/></span></Link>
            <div className='w-[40px] h-[40px] lg:hidden block cursor-pointer' onClick={handleMobileMenu}>
                {mobileMenu ? 
                    <li className='w-[40px] h-[40px] list-none '><AiOutlineMenuFold className='w-full h-full'/></li> 
                    :<li className='w-[40px] h-[40px] list-none'><AiOutlineMenu className='w-full h-full'/></li>}
            </div>
        </div>
    </div>
  )
}

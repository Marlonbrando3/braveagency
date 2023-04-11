import React from 'react'
import Link from 'next/link'
import { useEffect, useCallback, useRef } from 'react'
import {IoIosArrowUp} from 'react-icons/io'

export default function Backtotop() {

    const backToTopButton:any = useRef();

    const onScroll = useCallback(() => {

        if(window.pageYOffset > 350){
            backToTopButton.current.style.display = 'block'
    
        } else {
            backToTopButton.current.style.display  = "none"
    
        };
      }, []);
    
      useEffect(() => {
        window.addEventListener("scroll", onScroll);
      }, []);

  return (
    <Link href="/"><div ref={backToTopButton} className=' duration-150 fixed w-[50px] h-[50px] bottom-10 right-10 border border-[#423e59] bg-[#423e59] hidden text-white hover:bg-white hover:text-[#423e59]'><IoIosArrowUp className='w-[50px] h-[50px] p-2'/></div></Link>
  )
}

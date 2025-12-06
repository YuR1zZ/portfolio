'use client'


import Magnet from '../../components/ui/Magnet';
import Link from 'next/link';
import { useState , useEffect } from 'react';

const GamingHeader = () => {

  const [isScrolled, setIsScrolled] = useState();

  useEffect(() => {
    const handleScroll = ()=>{
      if(window.scrollY > 10) {
        setIsScrolled(true)
      }else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll' , handleScroll);
  
    return () => {
      window.removeEventListener('scroll' , handleScroll)
    }
  }, []);

  return (
    <div className={`flex w-full h-[60px] justify-between items-center text-[#EEEEEE] fixed top-0 z-[10] p-4 transition-all duration-300
      ${isScrolled ? "backdrop-blur-md bg-[#111111]/40 rounded-3xl px-10 max-sm:px-4 max-md:px-4" : "bg-transparent px-4"}
      `}>
      
      
      <div className='flex justify-center items-center cursor-none'>
        <Magnet>
          <Link
            href="/"
            className="relative text-[#EEEEEE] font-medium overflow-hidden"
          >
            <span className="underline-text relative z-10">YuR1</span>
            <span className="underline absolute left-1/2 -translate-x-1/2 bottom-0 w-0 h-[1px] bg-[#EEEEEE]"></span>
          </Link>
        </Magnet>
      </div>
        

        <Magnet>
        <div className="w-20 h-10 scale-[1.6] overflow-hidden">
        <img src="/images/yuri.png" alt="logo" className="object-contain w-full h-full" />
        </div>
        </Magnet>


        <div className='flex justify-center items-center cursor-none'>
            <Magnet>
          <Link
            href="/gaming"
            className="relative text-[#EEEEEE] font-medium overflow-hidden"
          >
            <span className="underline-text relative z-10">Home</span>
            <span className="underline absolute left-1/2 -translate-x-1/2 bottom-0 w-0 h-[1px] rounded-full bg-[#EEEEEE]"></span>
          </Link>
        </Magnet>
        </div>

      
    </div>
  )
}

export default GamingHeader

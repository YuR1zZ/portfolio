'use client'


import Magnet from '../../components/ui/Magnet';
import Link from 'next/link';
import { useState , useEffect } from 'react';

const CodingHeader = () => {

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
    <div className={`flex w-full justify-between items-center text-[#EEEEEE] fixed top-0 z-[10] p-4 transition-all duration-300
      ${isScrolled ? "backdrop-blur-md bg-[#111111]/40 rounded-3xl px-10 max-sm:px-4 max-md:px-4" : "bg-transparent px-4"}
      `}>
      
      {/* Name */}
      <div className='flex justify-center items-center cursor-none'>
        <Magnet>
          <Link
            href="/"
            className="relative text-[#EEEEEE] font-medium overflow-hidden"
          >
            <span className="underline-text relative z-10">MohammadPanahi</span>
            <span className="underline absolute left-1/2 -translate-x-1/2 bottom-0 w-0 h-[1px] bg-[#EEEEEE]"></span>
          </Link>
        </Magnet>
      </div>

      {/* Navigation links */}
      <div className='flex flex-row gap-x-5 items-center justify-center'>

        <Magnet>
          <Link
            href="/coding"
            className="relative text-[#EEEEEE] font-medium overflow-hidden"
          >
            <span className="underline-text relative z-10">Home</span>
            <span className="underline absolute left-1/2 -translate-x-1/2 bottom-0 w-0 h-[1px] bg-[#EEEEEE]"></span>
          </Link>
        </Magnet>

        <Magnet>
          <Link
            href="/coding/about"
            className="relative text-[#EEEEEE] font-medium overflow-hidden"
          >
            <span className="underline-text relative z-10">About</span>
            <span className="underline absolute left-1/2 -translate-x-1/2 bottom-0 w-0 h-[1px] bg-[#EEEEEE]"></span>
          </Link>
        </Magnet>

        <Magnet>
          <Link
            href="/coding/footer"
            className="relative text-[#EEEEEE] font-medium overflow-hidden"
          >
            <span className="underline-text relative z-10">Contact</span>
            <span className="underline absolute left-1/2 -translate-x-1/2 bottom-0 w-0 h-[1px] bg-[#EEEEEE]"></span>
          </Link>
        </Magnet>

      </div>
    </div>
  )
}

export default CodingHeader

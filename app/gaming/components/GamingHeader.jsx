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
    <div className={`flex w-full h-[60px] justify-center items-center text-[#EEEEEE] fixed top-0 z-[10] p-4 transition-all duration-300
      ${isScrolled ? "backdrop-blur-[3px] bg-[#111111]/40 rounded-b-lg px-10 max-sm:px-4 max-md:px-4" : "bg-transparent px-4"}
      `}>
      
        <Magnet>
        <div className="w-20 h-10 scale-[1.6] overflow-hidden">
        <img src="/images/yuri.png" alt="logo" className="object-contain w-full h-full" />
        </div>
        </Magnet>

      
    </div>
  )
}

export default GamingHeader

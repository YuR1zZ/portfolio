'use client'

import Link from 'next/link'
import { useState } from 'react';
import Magnet from './ui/Magnet';




const CodingHeader = () => {

    const [isActive, setIsActive] = useState(false);

  return (
    <div className='flex w-full justify-between items-center text-[#afa18f] fixed top-0 left-0 z-[10] p-4'>
      
      
      <div className='flex justify-center items-center cursor-none'>
        <Magnet><button>MohammadPanahi</button></Magnet>
      </div>
      <div className='flex flex-row gap-x-5 items-center justify-center'>
            
                <Magnet>
                  <button href="/" className="relative text-[#afa18f] font-medium overflow-hidden">
                  <span className="underline-text relative z-10">Home</span>
                  <span className="underline absolute left-1/2 -translate-x-1/2 bottom-0 w-0 h-[1px] bg-[#afa18f]"></span>
                  </button>
                </Magnet>
                <Magnet>
                  <button href="/" className="relative text-[#afa18f] font-medium overflow-hidden">
                  <span className="underline-text relative z-10">About</span>
                  <span className="underline absolute left-1/2 -translate-x-1/2 bottom-0 w-0 h-[1px] bg-[#afa18f]"></span>
                  </button>
                  </Magnet>
                <Magnet>
                  <button href="/" className="relative text-[#afa18f] font-medium overflow-hidden">
                  <span className="underline-text relative z-10">Contact</span>
                  <span className="underline absolute left-1/2 -translate-x-1/2 bottom-0 w-0 h-[1px] bg-[#afa18f]"></span>
                  </button>
                  </Magnet>
            
        </div>

        </div>
  )
}

export default CodingHeader

'use client'

import { StarsBackground } from '@/app/components/ui/GamingStars'
import Link from 'next/link'
import { RxHamburgerMenu } from "react-icons/rx";





const GamingHero = () => {
  return (
    <main className='relative w-full h-screen overflow-hidden flex items-center justify-center'>
      <StarsBackground />

        <div className='hero-text'>

        </div>

        <canvas></canvas>

        <div className='absolute flex justify-end items-center h-10 w-27 bg-white rounded-3xl bottom-8'>
          
          <div className='mr-2'>
            <Link href='/gaming/menu'>
            <span className='text-black'>
              Menu
            </span>
            </Link>
          </div>

          <div className='relative flex justify-center items-center mr-2 bg-[#4a4a4a] h-9 w-9 rounded-full'>
            <RxHamburgerMenu />
          </div>
          
          
        </div>
      
    </main>
  )
}

export default GamingHero

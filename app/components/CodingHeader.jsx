import Link from 'next/link'
import React from 'react'

const CodingHeader = () => {
  return (
    <nav className='flex w-full justify-between items-center text-white fixed top-0 left-0 z-[1] p-4'>
      <div className='flex justify-center items-center'>
        <h1>MohammadPanahi</h1>
      </div>
      <div className='flex flex-row gap-x-4 items-center justify-center'>
            
                <Link href='/'>Home</Link>
                <Link href='/about'>About</Link>
                <Link href='/contact'>Contact</Link>
            
        </div>
    </nav>
  )
}

export default CodingHeader

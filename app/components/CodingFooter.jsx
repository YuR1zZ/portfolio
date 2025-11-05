'use client'

import SpotLight from "./ui/SpotLight"

const CodingFooter = () => {
  return (
    <main className='flex h-screen justify-center items-center relative'>
        <SpotLight
        lights={[
        { color: "gray", position: "top-right" },
        ]}
      />

      <h2 className='text-[#EEEEEE] text-5xl'>Footer</h2>
    </main>
  )
}

export default CodingFooter

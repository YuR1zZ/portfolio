'use client';


import SpotLight from '../../components/ui/SpotLight';




const phrase = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.";

const About = ()=> {

  return (
    <main className='flex h-screen text-[#EEEEEE] p-[40px] items-center justify-center overflow-hidden lg:px-[15vw] xl:px-[20vw] md:px-[3vw] sm:px-[1vw] relative text-center'>

      <SpotLight
        lights={[
        { color: "gray", position: "bottom-right" },
        ]}
      />
        
        
      <div className='flex flex-wrap items-center justify-center m-0 mr-[1.3vw] text-[64px] leading-[1.1]'>
        {
          phrase
        }
      </div>
      
    </main>
  )
}

export default About
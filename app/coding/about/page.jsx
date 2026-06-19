'use client';


import SpotLight from '../../components/ui/SpotLight';




const phrase = "For the last three years, I've been turning ideas into projects, constantly improving my development skills. My expertise lies in frontend development, complemented by experience building and integrating backend solutions.";

const About = ()=> {

  return (
    <main className='flex h-screen text-[#EEEEEE] p-[40px] items-center justify-center overflow-hidden lg:px-[15vw] xl:px-[20vw] md:px-[3vw] sm:px-[1vw] relative text-center pointer-events-none'>

      <SpotLight
        lights={[
        { color: "gray", position: "bottom-right" },
        ]}
      />
        
        
      <div className='flex flex-wrap items-center justify-center m-0 mr-[1.3vw] text-[58px] max-xl:text-[55px] max-lg:text-[50px] max-md:text-[45px] max-sm:text-[30px] leading-[1.1]'>
        {
          phrase
        }
      </div>
      
    </main>
  )
}

export default About
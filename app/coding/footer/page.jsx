'use client'

import SpotLight from "@/app/components/ui/SpotLight";
import { useRef , useEffect } from "react"
import { RiArrowRightUpLine } from "react-icons/ri";
import Button from "@/app/components/ui/CodingButton";
import Magnet from "@/app/components/ui/Magnet";


const CodingFooter = () => {

  const path = useRef(null);
  let progress = 0;
  let x = 0.5;
  let time = Math.PI / 2;
  let reqId = null;

  useEffect(() => {
    setPath(progress);
  }, [])

  const setPath = (progress) => {
    const width = window.innerWidth * 0.7;
    path.current.setAttributeNS(null, "d", `M0 250 Q${width * x} ${250 + progress}, ${width} 250`)
  }

  const lerp = (x, y, a) => x * (1 - a) + y * a

  const manageMouseEnter = () => {
    if(reqId){
      cancelAnimationFrame(reqId)
      resetAnimation()
    }
  }

  const manageMouseMove = (e) => {
    const { movementY, clientX } = e;
    const pathBound =  path.current.getBoundingClientRect();
    x = (clientX - pathBound.left) / pathBound.width;
    progress+= movementY
    setPath(progress);
  }

  const manageMouseLeave = () => {
    animateOut();
  }

  const animateOut = () => {
    const newProgress = progress * Math.sin(time);
    progress = lerp(progress, 0, 0.025);
    time+=0.2;
    setPath(newProgress);
    if(Math.abs(progress) > 0.75){
      reqId = requestAnimationFrame(animateOut);
    }
    else{
      resetAnimation();
    }
  }

  const resetAnimation = () => {
    time = Math.PI / 2;
    progress = 0;
  }

  return (
    <main className='flex h-screen w-screen justify-center items-center relative'>
        <SpotLight
        lights={[
        { color: "gray", position: "top-right" },
        ]}
      />

      <div className="absolute flex items-center justify-center mt-[-300px]">
        
        <h1 className="p-3 text-3xl bg-gradient-to-b from-gray-600 to-white bg-clip-text text-transparent">
          Let's Work Together
        </h1>

        <RiArrowRightUpLine />
      </div>

      <div className='line-container'>
        <div className='line-body'>
            <div className='line'>
              <div onMouseEnter={() => {manageMouseEnter()}} onMouseMove={(e) => {manageMouseMove(e)}} onMouseLeave={() => {manageMouseLeave()}} className='line-box'></div>
              <svg>
                <path ref={path}></path>
              </svg>
            </div>
        </div>
    </div>

    <div className="absolute flex flex-col items-center justify-center mt-[300px]">
      {/* Email Button */}
      <Button href="mailto:panahim257@gmail.com">
        Email
      </Button>

      {/* Row of buttons under Email */}
      <div className="flex flex-row gap-5 mt-10">
        <Magnet>
      <button
        onClick={() => window.open("https://instagram.com/yourprofile", "_blank")}
        className="text-[#EEEEEE] font-medium overflow-hidden relative"
      >
        <span className="underline-text relative z-10">Instagram</span>
        <span className="underline absolute left-1/2 -translate-x-1/2 bottom-0 w-0 h-[1px] bg-[#EEEEEE]"></span>
      </button>
    </Magnet>


    <Magnet>
      <button
        onClick={() => window.open("https://instagram.com/yourprofile", "_blank")}
        className="text-[#EEEEEE] font-medium overflow-hidden relative"
      >
        <span className="underline-text relative z-10">Linkedin</span>
        <span className="underline absolute left-1/2 -translate-x-1/2 bottom-0 w-0 h-[1px] bg-[#EEEEEE]"></span>
      </button>
    </Magnet>


    <Magnet>
      <button
        onClick={() => window.open("https://instagram.com/yourprofile", "_blank")}
        className="text-[#EEEEEE] font-medium overflow-hidden relative"
      >
        <span className="underline-text relative z-10">Github</span>
        <span className="underline absolute left-1/2 -translate-x-1/2 bottom-0 w-0 h-[1px] bg-[#EEEEEE]"></span>
      </button>
    </Magnet>


    <Magnet>
      <button
        onClick={() => window.open("https://instagram.com/yourprofile", "_blank")}
        className="text-[#EEEEEE] font-medium overflow-hidden relative"
      >
        <span className="underline-text relative z-10">Telegram</span>
        <span className="underline absolute left-1/2 -translate-x-1/2 bottom-0 w-0 h-[1px] bg-[#EEEEEE]"></span>
      </button>
    </Magnet>

    </div>
  </div>

    </main>
  )
}

export default CodingFooter

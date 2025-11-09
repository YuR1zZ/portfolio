'use client'

import Particles from "./ui/Particles"
import SpotLight from "./ui/SpotLight"
import { TextAnimate } from "./ui/TextBlur"
import Lenis from "@studio-freight/lenis"
import { useEffect, useState } from "react"
import Button from "./ui/CodingButton"
import PlanetSketch from "./ui/Planet"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"


const Hero = () => {


  useEffect(() => {
  const lenis = new Lenis()

  lenis.scrollTo(0, { immediate: true })

  let rafId
  const raf = (time) => {
    lenis.raf(time)
    rafId = requestAnimationFrame(raf)
  }

  rafId = requestAnimationFrame(raf)

  return () => {
    cancelAnimationFrame(rafId)
    lenis.destroy()
  }
}, [])



    useGSAP(()=>{
    gsap.fromTo('.planet', {
      opacity:0,
    },{
      opacity:1,
      delay:0.5
    })
  })

  return (
    
    
    <div className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      
      <div className="absolute inset-0 z-0">
        
        <Particles
          quantity={100}
          ease={80}
          color="#ffffff"
          className="w-full h-full"
        />
      </div>
     <SpotLight
    lights={[
      { color: "gray", position: "bottom-right" },
      ]}
    />

  <div className="relative scale-[0.6] rotate-[40deg] pointer-events-none animate-bounce-slow z-10 -translate-y-60 sm:-translate-y-60 md:-translate-y-60 lg:-translate-y-60 xl:-translate-y-60 planet">
    <PlanetSketch />
    </div>

  <div className="absolute flex flex-col items-center justify-center min-h-screen text-center overflow-hidden">
    <TextAnimate animation="blurIn" as="h1" className='text-5xl text-[#EEEEEE] mb-3 font-thin'>
        hey, Mohammad here.
    </TextAnimate>
    <h1 className="text-4xl coding-text font-thin">
      i create good stuff
    </h1>
    <Button />
  </div>
</div>

    
  )
}

export default Hero

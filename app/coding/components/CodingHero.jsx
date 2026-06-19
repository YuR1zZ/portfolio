'use client'

import Particles from "../../components/ui/Particles"
import SpotLight from "../../components/ui/SpotLight"
import { TextAnimate } from "../../components/ui/TextBlur"
import Lenis from "@studio-freight/lenis"
import { useEffect, useState } from "react"
import Button from "../../components/ui/CodingButton"
import PlanetSketch from "../../components/ui/Planet"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"


const CodingHero = () => {


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

  <div className="relative scale-[0.6] rotate-40 pointer-events-none animate-bounce-slow z-10 -translate-y-60 sm:-translate-y-60 md:-translate-y-60 lg:-translate-y-60 xl:-translate-y-60 planet">
    <PlanetSketch />
    </div>

  <div className="absolute flex flex-col items-center justify-center min-h-screen text-center overflow-hidden">
    <TextAnimate animation="blurIn" as="h1" className='text-5xl text-[#EEEEEE] mb-3 font-thin'>
        hey, Mohammad here.
    </TextAnimate>
    <h1 className="text-4xl coding-text font-thin">
      i create good stuff
    </h1>
    <Button href="mailto:panahim257@gmail.com">
      Get in Touch
    </Button>
  </div>
</div>

    
  )
}

export default CodingHero

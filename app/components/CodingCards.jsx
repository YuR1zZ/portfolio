'use client'

import Card from "@/lib/Card"
import { useState,useRef,useEffect } from "react"
import Lenis from "@studio-freight/lenis"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
gsap.registerPlugin(ScrollTrigger)


const CodingCards = () => {

    useEffect(() => {
    const lenis = new Lenis()
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
    return () => lenis.destroy()
  }, [])


  const container = useRef(null)
  const cardsRef = useRef([])


  useGSAP(()=>{
    const cards = cardsRef.current
    const totalScrollHeight = window.innerHeight * 3
    const positions = [14,38,62,86]
    const rotations = [-15,-7.5,7.5,15]

    ScrollTrigger.create({
        trigger: container.current.querySelector('.cards'),
        start:'top top',
        end: ()=> `+=${totalScrollHeight}`,
        pin:true,
        pinSpacing:true,
    })

    cards.forEach((card,i)=>{
        gsap.to(card,{
            left:`${positions[i]}%`,
            rotation:`${rotations[i]}`,
            ease:"none",
            scrollTrigger:{
                scrub:.5,
                trigger:container.current.querySelector('.cards'),
                start:'top top',
                end:()=> `+=${window.innerHeight}`,
                id:`spread-${i}`
            }
        })
    })
  },
  {scope:container}
)

    
  return (
    <>

        
        <div className="container w-full h-[500vh] box-border m-0 p-0" ref={container}>
        <section className="hero-cards">
            <h3>
                keep scrolling to <br /> reveal the cards!
            </h3>
        </section>
        <section className="cards">
            {[...Array(4)].map((_,i)=>(
                <Card 
                key={i}
                id={`card-${i+1}`}
                // frontSrc='/vintage-card-front-${i}.jpg`'
                // frontSrc={`/vintage-card-front-${i + 1}.jpg`}
                // backSrc={`/vintage-card-back-${i + 1}.jpg`}
                frontSrc='/playing-card.jpeg'
                frontAlt='front card image'
                backText='back card text'
                ref={(el) => cardsRef.current[i] = el}
                />
            ))}
        </section>
        <section className="footer-cards">
            <h3>Footer</h3>
        </section>
    </div>
    
    </>
  )
}

export default CodingCards

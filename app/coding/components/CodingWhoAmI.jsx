'use client'

import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import { useEffect } from "react"
import SpotLight from "../../components/ui/SpotLight"


gsap.registerPlugin(ScrollTrigger)

const CodingWhoAmI = () => {


useEffect(() => {
    // Ensure this only runs on client
    const createAnimations = () => {
      // Kill existing ScrollTriggers for this component
      const container = document.querySelector('.whoami-container')
      if (!container) return
      
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars && trigger.vars.trigger === container) {
          trigger.kill()
        }
      })
      
      // Reset all header styles before recreating animations
      // Clear GSAP transforms to let CSS handle initial state
      const headers = document.querySelectorAll('.whoami-header')
      headers.forEach((header) => {
        gsap.set(header, {
          clearProps: 'all'
        })
      })
      
      // Recalculate end value dynamically - reduced to minimize gap
      const endValue = window.innerHeight * 1.2
      
      ScrollTrigger.create({
        trigger: ".whoami-container",
        start: "top bottom",
        end: "top top",
        scrub: 1,
        onUpdate: (self) => {
          const headers = document.querySelectorAll(".whoami-header");
          if (headers.length >= 3) {
          gsap.set(headers[0], { x: `${100 - self.progress * 100}%` });
          gsap.set(headers[1], { x: `${-100 + self.progress * 100}%` });
          gsap.set(headers[2], { x: `${100 - self.progress * 100}%` });
          }
        }
      });

      ScrollTrigger.create({
    trigger:'.whoami-container',
    start:'top top',
        end:`+=${endValue}px`,
    pin:true,
    scrub: 1,
        pinSpacing:true,
    onUpdate:(self)=>{
        const headers=document.querySelectorAll('.whoami-header');
          
          if (headers.length === 0) return

        if(self.progress <= 0.5) {
            const yProgress = self.progress / 0.5;
            gsap.set(headers[0], {y: `${yProgress * 100}%`})
            gsap.set(headers[2], {y: `${yProgress * -100}%`})
        }else {
            gsap.set(headers[0], {y: '100%'});
            gsap.set(headers[2], {y: '-100%'});

            const scaleProgress = (self.progress - 0.5) / 0.5;
            const minScale = window.innerWidth <= 1000 ? 0.3 : 0.1;
            const scale = 1 - scaleProgress * (1 - minScale);

            headers.forEach((header)=>{
                gsap.set(header,{scale})
            })
        }
    }
  })
    }
    
    const ctx = gsap.context(() => {
      createAnimations()
    });
    
    // Handle resize - recreate animations
    let resizeTimer
    const handleResize = () => {
      clearTimeout(resizeTimer)
      resizeTimer = setTimeout(() => {
        // Reset headers before refresh - clear all GSAP transforms
        const headers = document.querySelectorAll('.whoami-header')
        headers.forEach((header) => {
          gsap.set(header, {
            clearProps: 'all'
          })
        })
        ScrollTrigger.refresh()
        createAnimations()
      }, 250)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      clearTimeout(resizeTimer)
      window.removeEventListener('resize', handleResize)
      ctx.revert()
    }
  }, []);

  
    

  return (
    <main className='m-0 p-0 box-border relative overflow-hidden'>
      
        <section className='whoami-container h-screen '>
          <SpotLight
        lights={[
        { color: "gray", position: "top-left" },
        ]}
      />
            <div className='whoami-header'><img src='/images/whoami.svg'/></div>
            <div className='whoami-header'><img src='/images/whoami.svg'/></div>
            <div className='whoami-header'><img src='/images/whoami.svg'/></div>
        </section>
        <section className="h-[100vh]">
        
        </section>
    </main>
  )
}

export default CodingWhoAmI

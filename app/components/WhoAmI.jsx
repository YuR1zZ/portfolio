'use client'

import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import { useEffect } from "react"

gsap.registerPlugin(ScrollTrigger)

const WhoAmI = () => {


useEffect(() => {
    // Ensure this only runs on client
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: ".whoami-container",
        start: "top bottom",
        end: "top top",
        scrub: 1,
        onUpdate: (self) => {
          const headers = document.querySelectorAll(".whoami-header");
          gsap.set(headers[0], { x: `${100 - self.progress * 100}%` });
          gsap.set(headers[1], { x: `${-100 + self.progress * 100}%` });
          gsap.set(headers[2], { x: `${100 - self.progress * 100}%` });
        }
      });

      ScrollTrigger.create({
    trigger:'.whoami-container',
    start:'top top',
    end:`+=${window.innerHeight} * 2}`,
    pin:true,
    scrub: 1,
    pinSpacing:false,
    onUpdate:(self)=>{
        const headers=document.querySelectorAll('.whoami-header');

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

    });

    return () => ctx.revert(); // clean up on unmount
  }, []);

  
    

  return (
    <main className='m-0 p-0 box-border'>
        <section className='whoami-container h-screen '>
            <div className='whoami-header'><img src='/images/whoami.svg'/></div>
            <div className='whoami-header'><img src='/images/whoami.svg'/></div>
            <div className='whoami-header'><img src='/images/whoami.svg'/></div>
        </section>
        <section className="h-[100vh]">

        </section>
    </main>
  )
}

export default WhoAmI

'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SpotLight from '../../components/ui/SpotLight'

const Page = () => {
  const cardContainerRef = useRef(null)


  // GSAP + ScrollTrigger animations
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const cardContainer = cardContainerRef.current
    if (!cardContainer) return

    let isGapAnimationCompleted = false
    let isFlipAnimationCompleted = false
    let mm = gsap.matchMedia()

    const initAnimation = () => {
      // Reset state variables
      isGapAnimationCompleted = false
      isFlipAnimationCompleted = false
      
      // Kill all existing ScrollTriggers
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
      
      // Revert matchMedia to clean up previous contexts
      mm.revert()
      mm = gsap.matchMedia()
      
      // Reset card container styles when switching from large to small
      gsap.set(cardContainer, { 
        width: '100%',
        gap: '0px',
        clearProps: 'all'
      })
      
      // Reset card styles
      gsap.set('.card', {
        rotationY: 0,
        rotationZ: 0,
        y: 0,
        borderRadius: '',
        clearProps: 'all'
      })

      mm.add('(max-width: 999px)', () => {
        const cards = document.querySelectorAll('.card');

        cards.forEach((card) => {
          gsap.from(card, {
            scrollTrigger: {
              trigger: card,
              start: 'top 90%',
              toggleActions: 'play none none none',
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out',
          });
        });

        return () => {};
      });




      mm.add('(min-width: 1000px)', () => {
        // Recalculate end value on each init (handles resize)
        const endValue = window.innerHeight * 4
        
        ScrollTrigger.create({
          trigger: '.sticky',
          start: 'top top',
          end: `+=${endValue}px`,
          scrub: 1,
          pin: true,
          pinSpacing: true,
          onUpdate: (self) => {
            const progress = self.progress

            // Container width animation
            if (progress <= 0.25) {
              const widthPercentage = gsap.utils.mapRange(0, 0.25, 75, 60, progress)
              gsap.set(cardContainer, { width: `${widthPercentage}%` })
            } else {
              gsap.set(cardContainer, { width: '60%' })
            }

            // Gap animation
            if (progress >= 0.35 && !isGapAnimationCompleted) {
              gsap.to(cardContainer, {
                gap: '20px',
                duration: 0.5,
                ease: 'power3.out',
              })

              gsap.to(['#card-1', '#card-2', '#card-3'], {
                borderRadius: '20px',
                duration: 0.5,
                ease: 'power3.out',
              })

              isGapAnimationCompleted = true
            } else if (progress < 0.35 && isGapAnimationCompleted) {
              gsap.to(cardContainer, {
                gap: '0px',
                duration: 0.5,
                ease: 'power3.out',
              })

              gsap.to('#card-1', {
                borderRadius: '20px 0 0 20px',
                duration: 0.5,
                ease: 'power3.out',
              })
              gsap.to('#card-2', {
                borderRadius: '0px',
                duration: 0.5,
                ease: 'power3.out',
              })
              gsap.to('#card-3', {
                borderRadius: '0 20px 20px 0',
                duration: 0.5,
                ease: 'power3.out',
              })

              isGapAnimationCompleted = false
            }

            // Flip animation
            if (progress >= 0.7 && !isFlipAnimationCompleted) {
              gsap.to('.card', {
                rotationY: 180,
                duration: 0.75,
                ease: 'power3.inOut',
                stagger: 0.1,
              })

              gsap.to(['#card-1', '#card-3'], {
                y: 30,
                rotationZ: (i) => [-15, 15][i],
                duration: 0.75,
                ease: 'power3.inOut',
              })

              isFlipAnimationCompleted = true
            } else if (progress < 0.7 && isFlipAnimationCompleted) {
              gsap.to('.card', {
                rotationY: 0,
                duration: 0.75,
                ease: 'power3.inOut',
                stagger: -0.1,
              })

              gsap.to(['#card-1', '#card-3'], {
                y: 0,
                rotationZ: 0,
                duration: 0.75,
                ease: 'power3.inOut',
              })

              isFlipAnimationCompleted = false
            }
          },
        })
      })

      ScrollTrigger.refresh()
    }

    initAnimation()

    // Handle resize debounce
    let resizeTimer
    const handleResize = () => {
      clearTimeout(resizeTimer)
      resizeTimer = setTimeout(() => {
        ScrollTrigger.refresh()
        initAnimation()
      }, 250)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      clearTimeout(resizeTimer)
      window.removeEventListener('resize', handleResize)
      mm.revert()
      ScrollTrigger.killAll()
    }
  }, [])

  return (
    <main className="m-0 p-0 box-border relative">

      <section className='relative flex justify-center items-center mt-20'>
        <div className='block lg:hidden'>
          <h1 className='text-3xl text-[#EEEEEE]'>Specialties</h1>
        </div>
        <div className='hidden lg:block'>
          <h1 className='text-2xl text-[#EEEEEE]'>Keep Scrolling</h1>
        </div>
      </section>


      <section className="sticky" id='cards-sections'>
        <div className="card-container" ref={cardContainerRef}>
          <div className="card" id="card-1">
            <div className="card-front">
              <img src="/images/specialties_slice_1.png" alt="" />
            </div>
            <div className="card-back">
              <span>( 01 )</span>
              <p className='text-2xl text-[#EEEEEE]'>NEXTJS,REACTJS</p>
            </div>
          </div>

          <div className="card" id="card-2">
            <div className="card-front">
              <img src="/images/specialties_slice_2.png" alt="" />
            </div>
            <div className="card-back">
              <span>( 02 )</span>
              <p className='text-2xl text-[#EEEEEE]'>TailwindCSS</p>
            </div>
          </div>

          <div className="card" id="card-3">
            <div className="card-front">
              <img src="/images/specialties_slice_3.png" alt="" />
            </div>
            <div className="card-back">
              <span>( 03 )</span>
              <p className='text-2xl text-[#EEEEEE]'>GSAP</p>
            </div>
          </div>
        </div>
      </section>

      <section className="outro" id='cards-sections'>

        <SpotLight
      lights={[
      { color: "gray", position: "bottom-left" },
      ]}
      />
      </section>

      
    </main>
  )
}

export default Page

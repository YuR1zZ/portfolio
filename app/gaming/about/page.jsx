'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/ScrollTrigger'
import SplitText from 'gsap/SplitText'
import Lenis from '@studio-freight/lenis'

gsap.registerPlugin(ScrollTrigger, SplitText)

const Page = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    const lenis = new Lenis({
      smoothWheel: true,
    })

    lenis.on('scroll', ScrollTrigger.update)

    const update = (time) => {
      lenis.raf(time * 1000)
    }

    gsap.ticker.add(update)
    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove(update)
      lenis.destroy()
    }
  }, [])

  useGSAP(
    () => {
      gsap.from('.gaming-about-title', {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: 'power3.out',
      })

      const mm = gsap.matchMedia()

      mm.add('(min-width: 768px)', () => {
        let split = null
        let tween = null

        const setupSplit = () => {
          tween?.scrollTrigger?.kill()
          tween?.kill()
          split?.revert()

          split = new SplitText('.gaming-about-text', {
            type: 'lines',
            linesClass: 'line',
          })

          tween = gsap.from(split.lines, {
            yPercent: 100,
            opacity: 0,
            stagger: 0.08,
            duration: 0.8,
            ease: 'power4.out',
            scrollTrigger: {
              trigger: '.gaming-about-content',
              start: 'top 80%',
              once: true,
            },
          })

          ScrollTrigger.refresh()
        }

        setupSplit()

        let resizeTimer
        const onResize = () => {
          clearTimeout(resizeTimer)
          resizeTimer = setTimeout(setupSplit, 200)
        }

        window.addEventListener('resize', onResize)
        document.fonts?.ready?.then(() => ScrollTrigger.refresh())

        return () => {
          clearTimeout(resizeTimer)
          window.removeEventListener('resize', onResize)
          tween?.scrollTrigger?.kill()
          tween?.kill()
          split?.revert()
        }
      })

      mm.add('(max-width: 767px)', () => {
        gsap.from('.gaming-about-text', {
          opacity: 0,
          y: 40,
          duration: 0.8,
          scrollTrigger: {
            trigger: '.gaming-about-content',
            start: 'top 85%',
            once: true,
          },
        })
      })

      return () => mm.revert()
    },
    { scope: containerRef }
  )

  return (
    <div ref={containerRef}>
      <section className="gaming-about-hero">
        <h1 className="gaming-about-title gaming-text">
          Gaming is Life
        </h1>
      </section>

      <section className="gaming-about-content">
        <div className="gaming-about-text-wrapper">
          <p className="gaming-about-text">
            I started playing video games when I was just a kid, and I never really stopped. What began as a way to pass time quickly became something much deeper especially back when I was often alone at home while my parents were working. After finishing my homework, games became my company, my escape, and eventually my passion.

            {'\n\n'}

            From Sega and Nintendo to PS1, I grew up through generations of consoles before fully stepping into the world of PC gaming, where I’ve stayed ever since.

            {'\n\n'}

            FPS games have always been at the center of it all. Counter Strike is my current favorite, but I also had a competitive era in Call of Duty. Back in 2020, me and my team — UnForgivens Team — even won a national tournament in Iran for COD MW2. Even now, I still casually jump into Battlefield games, especially BF1.

            {'\n\n'}

            I’ve always been drawn to Souls like experiences as well Dark Souls 1, Dark Souls 3, and Elden Ring are some of my favorites. Elden Ring alone is a world I’ve returned to 4 or 5 times, even if Steam doesn’t fully reflect my playtime since I often played offline.

            {'\n\n'}

            When it comes to single player experiences, I lean toward RPG and adventure games like The Witcher, Ghost of Tsushima, God of War, Black Myth: Wukong, and Resident Evil. Games like these aren’t just entertainment to me they’re worlds I live inside.

            {'\n\n'}

            For me, gaming isn’t just a hobby. It’s a life long journey, a language, a memory, and a place where stories, competition, and imagination all meet.
          </p>
        </div>
      </section>
    </div>
  )
}

export default Page

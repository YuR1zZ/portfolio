'use client'

import gsap from 'gsap';
import { useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import SplitText from 'gsap/SplitText';
import Lenis from "@studio-freight/lenis"

gsap.registerPlugin(SplitText);

const page = () => {

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

  useGSAP(() => {
    const isMobile = window.innerWidth < 768;

    if (!isMobile) {
      const splitLines = new SplitText('.gaming-about-text', { type: 'lines' });

      gsap.from(splitLines.lines, {
        opacity: 0,
        yPercent: 60,
        duration: 0.5,
        stagger: 0.06,
        delay: 0.3,
        ease: 'power3.out'
      });
    } else {
      gsap.from('.gaming-about-title, .gaming-about-text', {
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.1,
      });
    }
  }, []);

  return (
    <div>

      {/* FULL SCREEN HERO (H1) */}
      <section className="gaming-about-hero">
        <h1 className="gaming-about-title">
          Gaming is Life
        </h1>
      </section>

      {/* CONTENT SECTION */}
      <section className="gaming-about-content">
        <div className="gaming-about-text-wrapper">
          <p className="gaming-about-text">
            I started playing video games when I was just a kid, and I never really stopped. What began as a way to pass time quickly became something much deeper — especially back when I was often alone at home while my parents were working. After finishing my homework, games became my company, my escape, and eventually my passion.

From Sega and Nintendo to PS1, I grew up through generations of consoles before fully stepping into the world of PC gaming, where I’ve stayed ever since.

FPS games have always been at the center of it all. Counter-Strike is my current favorite, but I also had a competitive era in Call of Duty. Back in 2020, me and my team — UnForgivens Team — even won a national tournament in Iran for COD MW2. Even now, I still casually jump into Battlefield games, especially BF1.

I’ve always been drawn to Souls-like experiences as well — Dark Souls 1, Dark Souls 3, and Elden Ring are some of my favorites. Elden Ring alone is a world I’ve returned to 4 or 5 times, even if Steam doesn’t fully reflect my playtime since I often played offline.

When it comes to single-player experiences, I lean toward RPG and adventure games like The Witcher, Ghost of Tsushima, God of War, Black Myth: Wukong, and Resident Evil. Games like these aren’t just entertainment to me — they’re worlds I live inside.

For me, gaming isn’t just a hobby. It’s a life-long journey, a language, a memory, and a place where stories, competition, and imagination all meet.

          </p>
        </div>
      </section>

    </div>
  )
}

export default page;
'use client'

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import SplitText from 'gsap/SplitText';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(SplitText)
gsap.registerPlugin(ScrollTrigger)

const page = () => {

  useGSAP(() => {
    const splitLines = new SplitText('.gaming-about-text', { type: 'lines' })

    gsap.from(splitLines.lines, {
      opacity: 0,
      yPercent: 60,
      duration: 0.5,
      stagger: 0.06,
      delay: 0.5,
    })
  }, [])

  return (
    <div className='h-screen w-screen text-[1.2rem] max-lg:text-[1rem] max-sm:text-[0.9rem] text-amber-50 flex justify-center items-center text-center overflow-hidden pl-20 pr-20  box-border z-10'>
      <p className='gaming-about-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate voluptate, necessitatibus facilis ab aliquid quidem repudiandae illo libero dicta minus sapiente iste vitae provident officiis soluta. Explicabo sunt obcaecati mollitia voluptate cum, laudantium temporibus doloremque tempore. Impedit esse voluptatem sequi voluptatibus deserunt illo recusandae, iusto et explicabo, dicta animi, beatae corporis labore sit vel rem vero ad numquam blanditiis. Facere, beatae dolores quibusdam cumque ab perspiciatis error aut accusantium eius quam architecto alias!</p>
    </div>
  )
}

export default page

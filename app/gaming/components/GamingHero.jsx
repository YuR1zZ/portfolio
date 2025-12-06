'use client'

import { StarsBackground } from '@/app/components/ui/GamingStars'
import { OrbitControls ,useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Link from 'next/link'
import { RxHamburgerMenu } from "react-icons/rx";
import React , {Suspense} from 'react';
import { BackgroundBeams } from '@/app/components/ui/BgBeams';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import SplitText from 'gsap/SplitText';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(SplitText)
gsap.registerPlugin(ScrollTrigger)






const GamingHero = () => {

  function Model({ path }) {
  const { scene } = useGLTF(path);
  return <primitive object={scene} />;

  const navigate = useNavigate()
}

useGSAP(()=>{
  const splitLines = new SplitText('.gaming-hero-text',{type:'lines'})

  gsap.from(splitLines.lines,{
    opacity: 0,
    yPercent: 60,
    duration: 0.7,
    stagger: 0.06,
    delay: 0.8,
  })

  gsap.from('.gaming-hero-title',{
    opacity: 0,
    yPercent: 60,
    duration: 0.7,
    stagger: 0.06,
    delay: 0.3,
  })
  gsap.from('.gaming-hero-menu',{
    opacity: 0,
    yPercent: 60,
    duration: 0.7,
    stagger: 0.06,
    delay: 1.5,
  })
  gsap.from('.gaming-hero-spaceship',{
    opacity: 0,
    yPercent:2,
    duration: 0.7,
    stagger: 0.06,
    delay: 2,
  })
})




  return (
    <main className='relative w-full h-screen overflow-hidden flex items-center justify-center'>
      <StarsBackground />
      <div className='hidden lg:block'>
        <BackgroundBeams />
      </div>


    
  
    <div className='absolute flex items-center justify-center h-full w-full'>

    <div className="absolute hidden h-full left-0 top-0 2xl:w-[55rem] xl:w-[50rem] lg:w-[50rem] -translate-y-50 lg:block pointer-event-none gaming-hero-spaceship">
    <Canvas camera={{ position: [-90, 80, 100], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <Suspense fallback={null}>
        <Model path="/models/scene.gltf" />
      </Suspense>
      <OrbitControls minDistance={6} maxDistance={6}/>
    </Canvas>
  </div>

  
  <div className="absolute w-[30rem] pointer-events-none sm:">
  <h1 className='text-4xl mb-10 gaming-text text-center gaming-hero-title uppercase'>
    To the Infinity and Beyond
  </h1>
    <p className="text-center text-2xl gaming-hero-text">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus modi tenetur eum reiciendis earum assumenda doloribus repudiandae asperiores.
    </p>
  </div>


    </div>



        <div className='absolute bottom-8 flex justify-center items-center gaming-hero-menu'>
      <Link href='/gaming/menu'>

        <div className='flex justify-end items-center h-10 w-27 bg-white rounded-3xl'>
          <div className='mr-2'>
            <span className='text-black'>
              Menu
            </span>
          </div>

          <div className='relative flex justify-center items-center mr-2 bg-[#4a4a4a] h-9 w-9 rounded-full'>
            <RxHamburgerMenu />
          </div>
        </div>

        </Link>
        </div>
      
    </main>
  )
}

export default GamingHero

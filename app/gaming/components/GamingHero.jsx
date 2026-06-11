'use client'

import { StarsBackground } from '@/app/components/ui/GamingStars'
import { OrbitControls ,useGLTF } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import React , {Suspense, useRef} from 'react';
import { BackgroundBeams } from '@/app/components/ui/BgBeams';
import gsap from 'gsap';
import SplitText from 'gsap/SplitText';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(SplitText)
gsap.registerPlugin(ScrollTrigger)






const GamingHero = () => {

  function Model({ path }) {
    const { scene } = useGLTF(path);
    const groupRef = useRef();
    
    // Add tilt effects only (no rotation)
    useFrame((state) => {
      if (groupRef.current) {
        // Dynamic tilt effect - forward/backward tilt
        groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 1.5) * 0.1;
        // Subtle side-to-side tilt
        groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 2) * 0.05;
      }
    });
    
    return (
      <group ref={groupRef}>
        <primitive object={scene} />
      </group>
    );
  }

  useGSAP(()=>{
  const splitLines = new SplitText('.gaming-hero-text',{type:'lines'})

  gsap.from('.gaming-hero-stars',{
    opacity: 0,
    duration: 1.2,
    ease: 'power2.out',
    delay: 0.3,
  })

  gsap.from(splitLines.lines,{
    opacity: 0,
    yPercent: 60,
    duration: 0.7,
    stagger: 0.06,
    delay: 1,
  })

  gsap.from('.gaming-hero-title',{
    opacity: 0,
    yPercent: 60,
    duration: 0.7,
    stagger: 0.06,
    delay: 0.7,
  })
  gsap.from('.gaming-hero-spaceship',{
    opacity: 0,
    yPercent:2,
    duration: 0.7,
    stagger: 0.06,
    delay: 1.8,
  })
})




  return (
    <main className='relative w-full h-screen overflow-hidden flex items-center justify-center'>
      <StarsBackground className="gaming-hero-stars" />
      <div className='hidden lg:block'>
        <BackgroundBeams />
      </div>


    
  
    <div className='absolute flex items-center justify-center h-full w-full'>

    <div className="absolute hidden h-full left-0 top-0 2xl:w-[55rem] xl:w-[50rem] lg:w-[50rem] md:w-[50rem] -translate-y-50 sm:block pointer-event-none gaming-hero-spaceship">
    <Canvas camera={{ position: [-90, 80, 100], fov: 50 }}>
      <ambientLight intensity={1} />
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
    <p className="text-center p-10 text-2xl max-md:text-lg max-sm:text-lg max-sm:pl-20 max-sm:pr-20 gaming-hero-text">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus modi tenetur eum reiciendis earum assumenda doloribus repudiandae asperiores.
    </p>
  </div>


    </div>
      
    </main>
  )
}

export default GamingHero

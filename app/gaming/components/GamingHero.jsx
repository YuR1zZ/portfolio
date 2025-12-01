'use client'

import { StarsBackground } from '@/app/components/ui/GamingStars'
import { OrbitControls ,useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Link from 'next/link'
import { RxHamburgerMenu } from "react-icons/rx";
import React , {Suspense} from 'react';





const GamingHero = () => {

  function Model({ path }) {
  const { scene } = useGLTF(path);
  return <primitive object={scene} />;
}


  return (
    <main className='relative w-full h-screen overflow-hidden flex items-center justify-center'>
      <StarsBackground />
      

        <div className='hero-text'>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus modi tenetur eum reiciendis earum assumenda doloribus repudiandae asperiores inventore hic porro minus animi voluptates nam ipsa ipsam beatae, nostrum impedit.</p>
        </div>

        <Canvas camera={{position: [0,2,5], fov:50}}>
          <ambientLight intensity={0.5}/>
          <directionalLight position={[5,5,5]} intensity={1}/>
          <Suspense fallback={null}>
            <Model path='/models/scene.gltf'/>
          </Suspense>
          <OrbitControls />
        </Canvas>

        <div className='absolute flex justify-end items-center h-10 w-27 bg-white rounded-3xl bottom-8'>
          
          <div className='mr-2'>
            <Link href='/gaming/menu'>
            <span className='text-black'>
              Menu
            </span>
            </Link>
          </div>

          <div className='relative flex justify-center items-center mr-2 bg-[#4a4a4a] h-9 w-9 rounded-full'>
            <RxHamburgerMenu />
          </div>
          
          
        </div>
      
    </main>
  )
}

export default GamingHero

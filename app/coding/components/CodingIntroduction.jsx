'use client'

import { useState , useEffect } from "react";
import { motion } from 'framer-motion'
import useMousePosition from "../../components/ui/useMousePosition";
import SpotLight from "../../components/ui/SpotLight";


const CodingIntroduction = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 400 : 40;

  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
  
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <main className='intro-main relative overflow-hidden'>
      <SpotLight lights={[{ color: "gray", position: "top-right" }]} />

      {/* 3. Only render the mask if isDesktop is true */}
      {isDesktop && (
        <motion.div 
          className='mask text-center text-[64px] max-lg:text-[54px] max-md:text-[45px]'
          animate={{
            WebkitMaskPosition: `${x - (size/2)}px ${y - (size/2)}px`,
            WebkitMaskSize: `${size}px`,
          }}
          transition={{ type: "tween", ease: "backOut", duration: 0.5}}
        >
            <p 
              className={`text-center ${isHovered ? 'text-black' : 'text-[#EEEEEE]'}`} 
              onMouseEnter={() => setIsHovered(true)} 
              onMouseLeave={() => setIsHovered(false)}
            >
              A developer with skills that already replaced by AI. turning working projects into serious complex problems. gimme a farm im done with this shii.
            </p>
        </motion.div>
      )}

      <div className='content text-center text-[64px] max-lg:text-[54px] max-md:text-[45px]'>
        <p>I'm a <span className="coding-text">software developer</span> dedicated to turning complex problems into efficient, high-quality digital solutions with lasting value.</p>
      </div>
    </main>
  )
}

export default CodingIntroduction

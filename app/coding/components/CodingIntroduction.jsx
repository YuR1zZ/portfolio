'use client'

import { useState } from "react";
import { motion } from 'framer-motion'
import useMousePosition from "../../components/ui/useMousePosition";
import SpotLight from "../../components/ui/SpotLight";


const Introduction = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 400 : 40;

  return (
    
    <main className='intro-main relative overflow-hidden'>
      <SpotLight
        lights={[
        { color: "gray", position: "top-right" },
        ]}
      />
      <motion.div 
        className='mask'
        animate={{
          WebkitMaskPosition: `${x - (size/2)}px ${y - (size/2)}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration:0.5}}
      >
          <p className={`text-center ${isHovered ? 'text-black' : 'text-[#EEEEEE]'}`} onMouseEnter={() => {setIsHovered(true)}} onMouseLeave={() => {setIsHovered(false)}}>
            A visual designer - with skills that haven't been replaced by A.I (yet) - making good shit only if the paycheck is equally good.
          </p>
      </motion.div>
      

      <div className='content text-center'>
        <p>I'm a <span className="coding-text">selectively skilled</span> product designer with strong focus on producing high quality & impactful digital experience.</p>
      </div>

    </main>
  )
}

export default Introduction

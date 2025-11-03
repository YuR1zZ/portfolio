'use client'


import { useRef , useEffect , useState } from "react"
import { useScroll , motion } from "framer-motion"

const TextOpacityParagraph = ({value}) => {

    const element = useRef(null)
    const {scrollYProgress} = useScroll({
      target: element,
      offset : ["start 0.9", "start 0.25"]
    })

    
  return (
    <motion.p className={`text-[40px] width-[1280px] p-[40px] flex flex-wrap`}
     ref={element}
     style={{opacity : scrollYProgress}}
     >
        {value}
    </motion.p>
  )
}

export default TextOpacityParagraph

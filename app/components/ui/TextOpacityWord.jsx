'use client'


import { useRef , useEffect , useState } from "react"
import { useScroll , motion } from "framer-motion"
import TextOpacityParagraph from "./TextOpacityParagraph"

const TextOpacityWord = ({value}) => {

    const element = useRef(null)
    const {scrollYProgress} = useScroll({
      target: element,
      offset : ["start 0.9", "start 0.25"]
    })

    const words = (value || "").split(" ");

  return (
    <p className={`text-[40px] width-[1280px] p-[40px]`}
     ref={element}
     >{
        words.map((word , i) => {
            return
                <span key={i}>
                    {word}
                </span>
        })
    }
    </p>
  )
}

export default TextOpacityWord

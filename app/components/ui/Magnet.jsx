'use client'

import gsap from "gsap"
import React , { useRef } from "react"


const Magnet = () => {

    const ref = useRef(null)

  return (
    <div ref={ref}>
      React.cloneElement(children,{ref})
    </div>
  )
}

export default Magnet

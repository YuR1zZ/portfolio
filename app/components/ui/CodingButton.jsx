'use client'

import { useRef } from 'react'

const Button = ({ children, href = "#", color = "grey" }) => {
  const btnRef = useRef(null)

  const handleMouseMove = (e) => {
    const btn = btnRef.current
    if (!btn) return

    const rect = btn.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const transX = (x - rect.width / 2) / 4
    const transY = (y - rect.height / 2) / 4

    btn.style.transform = `translate(${transX}px, ${transY}px)`
    btn.style.setProperty("--x", `${x}px`)
    btn.style.setProperty("--y", `${y}px`)
  }

  const handleMouseOut = () => {
    const btn = btnRef.current
    if (!btn) return
    btn.style.transform = ""
  }

  return (

    // usage

//     import { FaGithub } from "react-icons/fa"

// <Button href="https://github.com" color="#333">
//   <div className="flex items-center gap-2">
//     <FaGithub size={20} />
//     <span>GitHub</span>
//   </div>
// </Button>


    <a
      ref={btnRef}
      href={href}
      className="btn"
      style={{ '--clr': color }}
      onMouseMove={handleMouseMove}
      onMouseOut={handleMouseOut}
    >
      <span>{children}</span>
    </a>
  )
}

export default Button

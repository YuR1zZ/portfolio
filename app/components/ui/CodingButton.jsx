'use client'

import { useEffect } from 'react'
import React from 'react'

const Button = () => {
  useEffect(() => {
    const buttons = document.querySelectorAll(".btn")

    buttons.forEach((btn) => {
      const handleMouseMove = (e) => {
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
        btn.style.transform = ""
      }

      btn.addEventListener("mousemove", handleMouseMove)
      btn.addEventListener("mouseout", handleMouseOut)

      return () => {
        btn.removeEventListener("mousemove", handleMouseMove)
        btn.removeEventListener("mouseout", handleMouseOut)
      }
    })
  }, [])

  return (
    <div>
      <a href="#" className="btn" style={{ '--clr': 'grey' }}>
        <span>get in touch</span>
      </a>
    </div>
  )
}

export default Button

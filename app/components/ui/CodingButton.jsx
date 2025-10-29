'use client'

import { useEffect } from 'react'
import React from 'react'
import Magnet from './Magnet'

const Button = () => {

    useEffect(() => {
    const buttons = document.querySelectorAll(".btn");

    buttons.forEach((btn) => {
      const handleMouseMove = (e) => {
        const x = e.offsetX;
        const y = e.offsetY;
        const btnWidth = btn.clientWidth;
        const btnHeight = btn.clientHeight;
        const transX = x - btnWidth / 1.5;
        const transY = y - btnHeight / 1.5;
        btn.style.transform = `translateX(${transX}px) translateY(${transY}px)`;

        const mx = e.pageX - btn.offsetLeft;
        const my = e.pageY - btn.offsetTop;
        btn.style.setProperty("--x", mx + "px");
        btn.style.setProperty("--y", my + "px");
      };

      const handleMouseOut = () => {
        btn.style.transform = "";
      };

      btn.addEventListener("mousemove", handleMouseMove);
      btn.addEventListener("mouseout", handleMouseOut);

      // Cleanup listeners on unmount
      return () => {
        btn.removeEventListener("mousemove", handleMouseMove);
        btn.removeEventListener("mouseout", handleMouseOut);
      };
    });
  }, []);



  return (
    
    <div>
      <a href="#" className="btn" style={{ '--clr': 'grey' }}><span>Magic Button</span></a>
    </div>
    
  )
}

export default Button

// 'use client'

// import gsap from "gsap";
// import { useEffect, useRef } from "react";

// const MouseEffect = () => {

//   const size = 30
//   const mouse = useRef({x:0,y:0})
//   const circle = useRef()

//   const manageMouseMove = (e)=> {
//     const {clientX , clientY} = e;
//     mouse.current = {
//       x: clientX,
//       y: clientY
//     }

//     moveCircle(mouse.current.x , mouse.current.y)
//   }

//   const moveCircle = (x,y)=> {
//     gsap.set(circle.current, {x,y , xPercent:-50 , yPercent:-50})
//   }

//   useEffect(() => {
//     window.addEventListener('mousemove', manageMouseMove)
//     return () => 
//     window.removeEventListener('mousemove', manageMouseMove)
//   }, []);

//   return (

//     <div
//     ref={circle}
//      className='fixed top-0 left-0 rounded-full bg-green-100' 
//      style={{
//       width:size,
//       height:size
//       }}>
      
//     </div>
//   )
// }

// export default MouseEffect

'use client'

import { useRef , useEffect } from "react";
import gsap from "gsap";


const MouseEffect = () => {

  const size = 30;
  const mouse = useRef({x:0,y:0})
  const circle = useRef();

  const manageMouseMove = (e)=>{
    const {clientX , clientY} = e;
    mouse.current = {
      x:clientX ,
      y:clientY,
    }
    moveCircle(mouse.current.x,mouse.current.y)
  }

  const moveCircle = (x,y)=>{
    gsap.set(circle.current , {x,y , xPercent:-50 , yPercent:-50})
  }

  useEffect(() => {
    window.addEventListener('mousemove' , manageMouseMove)
    return ()=> window.removeEventListener('mousemove' , manageMouseMove)
  }, []);

  return (
    <div 
    ref={circle}
    className='fixed top-0 left-0 bg-gray-500 rounded-full'
    style={{
      width:size,
      height:size,
    }}
    >
    </div>
  )
}

export default MouseEffect

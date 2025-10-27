'use client'

import gsap from "gsap"
import React , { useRef, useEffect , useState} from "react"


const Magnet = ({children}) => {

  

    const ref = useRef(null)



    useEffect(() => {

      if (!ref.current) return;

      const xTo = gsap.quickTo(ref.current, 'x', {duration:1, ease:'elastic.out(1,0.3)'})
      const yTo = gsap.quickTo(ref.current, 'y', {duration:1, ease:'elastic.out(1,0.3)'})

      const underline = ref.current.querySelector('.underline');

      const mouseMove = (e)=>{
        const {clientX,clientY}= e;
        const {width,height,left,top} = ref.current.getBoundingClientRect();
        const x = clientX - (left + width / 2);
        const y = clientY - (top + height / 2);
        xTo(x)
        yTo(y)

      }

      const mouseLeave = (e)=>{
        xTo(0)
        yTo(0)
        //revert hover animation
        gsap.to(ref.current, { scale: 1, duration: 0.4, ease: 'power2.out' });
        if (underline) {
        gsap.to(underline, { width: 0, duration: 0.4, ease: 'power2.out' });
        }
      }

      const mouseEnter = () => {
        gsap.to(ref.current, { scale: 1.2, duration: 0.4, ease: 'power2.out' });
        if (underline) {
        gsap.to(underline, { width: '100%', duration: 0.4, ease: 'power2.out' });
        }
      };


      ref.current.addEventListener('mousemove',mouseMove)
      ref.current.addEventListener('mouseleave',mouseLeave)
      ref.current.addEventListener('mouseenter', mouseEnter);


      return()=>{
        if (ref.current) {
      ref.current.removeEventListener('mousemove', mouseMove);
      ref.current.removeEventListener('mouseleave', mouseLeave);
      ref.current.removeEventListener('mouseenter', mouseEnter);
    }
      }
    }, []);

    const [isActive, setIsActive] = useState(false);

  return (

    React.cloneElement(children,{ref})


  )
}

export default Magnet

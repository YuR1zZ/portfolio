'use client';

import { useRef, useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import SpotLight from '../../components/ui/SpotLight';


gsap.registerPlugin(ScrollTrigger);

const phrase = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.";

const CodingIntroduction2 = ()=> {

  let refs = useRef([]);
  const body = useRef(null);
  const container = useRef(null);

  useEffect( () => {
    gsap.registerPlugin(ScrollTrigger);
    createAnimation();
  }, [])

  const createAnimation = () => {
      gsap.to(refs.current, {
        scrollTrigger: {
            trigger: container.current,
            scrub: true,
            start: `top center`,
            end: `+=${window.innerHeight / 1.5}`,
        },
        opacity: 1,
        ease: "none",
        stagger: 0.1
    })
  }

  const splitWords = (phrase) => {
    let body = [];
    phrase.split(" ").forEach( (word, i) => {
      const letters = splitLetters(word);
      body.push(<p key={word + "_" + i} className='m-0 mr-[1.3vw] text-[64px] leading-[1.1]'>{letters}</p>)
    })
    return body
  }

  const splitLetters = (word) => {
    let letters = []
    word.split("").forEach( (letter, i) => {
      letters.push(<span className='opacity-[0.2]' key={letter + "_" + i} ref={el => {refs.current.push(el)}}>{letter}</span>)
    })
    return letters;
  }

  return (
    <main ref={container} className='flex flex-col h-screen text-[#EEEEEE] p-[40px] items-center justify-center overflow-hidden lg:px-[15vw] xl:px-[20vw] md:px-[3vw] sm:px-[1vw] relative'>

      <SpotLight
        lights={[
        { color: "gray", position: "bottom-right" },
        ]}
      />
        
        
      <div ref={body} className='w-[90%] flex flex-wrap items-center justify-center'>
        {
          splitWords(phrase)
        }
      </div>
      
    </main>
  )
}

export default CodingIntroduction2
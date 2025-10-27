'use client'

import Card from "./ui/Card"
import gsap from "gsap"
import { useRef, useLayoutEffect,useEffect } from "react"
import Lenis from "@studio-freight/lenis"
import { ScrollTrigger } from "gsap/all"
gsap.registerPlugin(ScrollTrigger)

const CodingCards = () => {

    useEffect(() => {
    const lenis = new Lenis()
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
    return () => lenis.destroy()
  }, [])

  const container = useRef(null)
  const cardRefs = useRef([])



  useLayoutEffect(() => {
    const cards = cardRefs.current.filter(Boolean); // avoid null refs
    const cardsContainer = container.current?.querySelector('.cards');
    if (!cardsContainer || cards.length === 0) return;

    const totalScrollHeight = window.innerHeight * 3;
    const positions = [14, 38, 62, 86];
    const rotations = [-15, -7.5, 7.5, 15];

    // Pin the cards section
    ScrollTrigger.create({
      trigger: cardsContainer,
      start: 'top top',
      end: () => `+=${totalScrollHeight}`,
      pin: true,
      pinSpacing: true,
    });

    // Spread animation for cards
    cards.forEach((card, index) => {
      gsap.to(card, {
        left: `${positions[index]}%`,
        rotation: rotations[index],
        ease: 'none',
        scrollTrigger: {
          trigger: cardsContainer,
          start: 'top top',
          end: () => `+=${window.innerHeight}`,
          scrub: 0.5,
          id: `spread-${index}`
        }
      });

      const frontEl = card.querySelector('.flip-card-front');
      const backEl = card.querySelector('.flip-card-back');

      const staggerOffset = index * 0.05;
      const startOffset = 1 / 3 + staggerOffset;
      const endOffset = 2 / 3 + staggerOffset;

      ScrollTrigger.create({
        trigger: card,
        start: 'top top',
        end: () => `+=${totalScrollHeight}`,
        scrub: 1,
        id: `rotate-flip-${index}`,
        onUpdate: (self) => {
          const progress = self.progress;
          if (progress >= startOffset && progress <= endOffset) {
            const animationProgress = (progress - startOffset) / (1 / 3);
            const frontRotation = -180 * animationProgress;
            const backRotation = 180 - 180 * animationProgress;
            const cardRotation = rotations[index] * (1 - animationProgress);

            gsap.to(frontEl, { rotateY: frontRotation, ease: 'power1.out' });
            gsap.to(backEl, { rotateY: backRotation, ease: 'power1.out' });
            gsap.to(card, {
              xPercent: -50,
              yPercent: cardRotation,
              ease: 'power1.inOut'
            });
          }
        }
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={container} className="hidden md:block">
      <section className='hero'>
        <h3>Keep scrolling to <br /> reveal the cards</h3>
      </section>
      <section className='cards'>
        {[...Array(4)].map((_, index) => (
          <Card
            key={index}
            id={`card-${index + 1}`}
            frontSrc='/images/playing-card.png'
            frontAlt='Card Image'
            backText='Card Details'
            ref={el => (cardRefs.current[index] = el)}
          />
        ))}
      </section>
      <section className='footer'>
        <h3>Footer</h3>
      </section>
    </div>
  )
}

export default CodingCards

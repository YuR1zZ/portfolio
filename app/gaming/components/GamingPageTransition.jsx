'use client'

import { useEffect, useRef, useState } from "react"
import { useRouter, usePathname } from "next/navigation"
import gsap from "gsap"

const BLOCK_SIZE = 60;

export default function GamingPageTransition({children}){
  const router = useRouter()
  const pathname = usePathname()

  const transitionGridRef = useRef(null)
  const blocksRef = useRef([])
  const isTransitioning = useRef(false)
  const transitionTl = useRef(null)
  const [showContent, setShowContent] = useState(false)

  const createTransitionGrid = () => {
    if (!transitionGridRef.current) return;

    const container = transitionGridRef.current;
    container.innerHTML = '';
    blocksRef.current = []

    const gridWidth = window.innerWidth;
    const gridHeight = window.innerHeight;

    const columns = Math.ceil(gridWidth / BLOCK_SIZE);
    const rows = Math.ceil(gridHeight / BLOCK_SIZE) + 1;

    const offsetX = (gridWidth - columns * BLOCK_SIZE) / 2;
    const offsetY = (gridHeight - rows * BLOCK_SIZE) / 2;

    for(let row = 0; row < rows; row++){
      for(let col = 0; col < columns; col++){
        const block = document.createElement('div');
        block.className = 'transition-block';
        block.style.cssText = `
        width: ${BLOCK_SIZE}px;
        height: ${BLOCK_SIZE}px;
        left: ${col * BLOCK_SIZE + offsetX}px;
        top: ${row * BLOCK_SIZE + offsetY}px;`

        container.appendChild(block);
        blocksRef.current.push(block)
      }
    }

    gsap.set(blocksRef.current, {opacity: 0})
  }

  useEffect(() => {
    // Reset content visibility when pathname changes
    setShowContent(false);
    
    createTransitionGrid();

    const handleResize = () => {
      createTransitionGrid();
    }
    window.addEventListener('resize', handleResize)

    // Use event delegation to catch all links, including dynamically created ones
    const handleLinkClick = (e) => {
      const link = e.target.closest('a[href^="/"]');
      if (!link) return;

      e.preventDefault();
      const url = new URL(link.href).pathname;

      if (!isTransitioning.current && url !== pathname) {
        isTransitioning.current = true;
        setShowContent(false); // Hide content before transition
        overPage(url);
      }
    };

    document.addEventListener("click", handleLinkClick);

    // Small delay to ensure grid is ready, then reveal immediately
    requestAnimationFrame(() => {
      revealPage();
    });

    return () => {
      window.removeEventListener('resize', handleResize)
      document.removeEventListener("click", handleLinkClick);
      if (transitionTl.current) transitionTl.current.kill();
    };
  }, [pathname]);

  const overPage = (url) => {
    if (transitionTl.current) transitionTl.current.kill();

    transitionTl.current = gsap.timeline({
      onComplete: () => {
        router.push(url);
      },
    });

    transitionTl.current.to(blocksRef.current, {
      opacity: 1,
      duration: 0.05,
      ease: 'power2.inOut',
      stagger: {amount: 0.5, from: 'random'},
    });
  };

  const revealPage = () => {
    if (!blocksRef.current.length) {
      setShowContent(true);
      return;
    }

    // Set blocks to visible first (they should be from exit animation)
    gsap.set(blocksRef.current, {opacity: 1});

    // Start revealing animation
    gsap.to(blocksRef.current, {
      opacity: 0,
      duration: 0.05,
      ease: 'power2.inOut',
      stagger: {amount: 0.5, from: 'random'},
      onComplete: () => {
        isTransitioning.current = false;
        // Show content after transition completes
        setShowContent(true);
      },
    });
  };

  return (
    <>
      <div ref={transitionGridRef} className="transition-grid"/>
      {showContent && children}
    </>
  )
}
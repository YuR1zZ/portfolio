"use client";

import { useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import gsap from "gsap";

export default function CodingPageTransition({ children }) {
  const router = useRouter();
  const pathname = usePathname();

  const overlayRef = useRef(null);
  const blocksRef = useRef([]);
  const isTransitioning = useRef(false);
  const transitionTl = useRef(null);

  useEffect(() => {
    const createBlocks = () => {
      if (!overlayRef.current) return;

      overlayRef.current.innerHTML = "";
      blocksRef.current = [];

      for (let i = 0; i < 20; i++) {
        const block = document.createElement("div");
        block.className = "block";
        overlayRef.current.appendChild(block);
        blocksRef.current.push(block);
      }
    };

    createBlocks();

    const links = document.querySelectorAll('a[href^="/"]');
    const listeners = [];

    links.forEach((link) => {
      const handler = (e) => {
        e.preventDefault();
        const url = new URL(link.href).pathname;

        if (!isTransitioning.current && url !== pathname) {
          isTransitioning.current = true;
          overPage(url);
        }
      };

      link.addEventListener("click", handler);
      listeners.push({ link, handler });
    });

    revealPage();

    // Handle resize - recreate blocks if needed
    let resizeTimer
    const handleResize = () => {
      clearTimeout(resizeTimer)
      resizeTimer = setTimeout(() => {
        // Only recreate if blocks are missing (shouldn't happen, but safety check)
        if (!blocksRef.current.length) {
          createBlocks()
          revealPage()
        }
      }, 250)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      clearTimeout(resizeTimer)
      window.removeEventListener('resize', handleResize)
      // clean up event listeners
      listeners.forEach(({ link, handler }) =>
        link.removeEventListener("click", handler)
      );

      // kill any running GSAP timelines
      if (transitionTl.current) transitionTl.current.kill();
    };
  }, [pathname]);

  const overPage = (url) => {
    transitionTl.current = gsap.timeline({
      onComplete: () => {
        router.push(url);
      },
    });

    transitionTl.current.to(blocksRef.current, {
      scaleX: 1,
      duration: 0.4,
      stagger: 0.02,
      ease: "power2.out",
      transformOrigin: "left",
    });
  };

  const revealPage = () => {
    if (!blocksRef.current.length) return;

    gsap.set(blocksRef.current, { scaleX: 1, transformOrigin: "right" });

    gsap.to(blocksRef.current, {
      scaleX: 0,
      duration: 0.4,
      stagger: 0.02,
      ease: "power2.out",
      transformOrigin: "right",
      onComplete: () => {
        isTransitioning.current = false;
      },
    });
  };

  return (
    <>
      <div ref={overlayRef} className="transition-overlay"></div>
      {children}
    </>
  );
}

"use client";

import { useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import gsap from "gsap";

export default function PageTransition({ children }) {
  const router = useRouter();
  const pathname = usePathname();

  const isTransitioning = useRef(false);
  const overlayRef = useRef(null);
  const tl = useRef(null);


  // EXIT ANIMATION

  const animateExit = (url) => {
    if (tl.current) tl.current.kill();

    tl.current = gsap.timeline({
      onComplete: () => router.push(url),
    });

    tl.current.to(overlayRef.current, {
      y: 0,
      duration: 0.7,
      ease: "power4.inOut",
    });
  };


  // ENTER ANIMATION

  const animateEnter = () => {
    gsap.set(overlayRef.current, { y: 0 }); // start covered

    gsap.to(overlayRef.current, {
      y: "-100%",
      duration: 0.8,
      ease: "power4.inOut",
      onComplete: () => {
        isTransitioning.current = false;
      },
    });
  };


  useEffect(() => {
    const links = document.querySelectorAll('a[href^="/"]');
    const listeners = [];

    links.forEach((link) => {
      const handler = (e) => {
        const url = new URL(link.href).pathname;
        if (url === pathname) return;
        if (isTransitioning.current) return;

        e.preventDefault();
        isTransitioning.current = true;
        animateExit(url);
      };

      link.addEventListener("click", handler);
      listeners.push({ link, handler });
    });

    return () => {
      listeners.forEach(({ link, handler }) =>
        link.removeEventListener("click", handler)
      );
    };
  }, [pathname]);

  // Run enter animation when route loads
  useEffect(() => {
    animateEnter();
  }, [pathname]);


  return (
    <>
      <div ref={overlayRef} style={overlayStyle} />
      {children}
    </>
  );
}


const overlayStyle = {
  position: "fixed",
  left: 0,
  top: 0,
  width: "100vw",
  height: "100vh",
  background: "black",
  zIndex: 9999,
  pointerEvents: "none",
  transform: "translateY(100%)",
};

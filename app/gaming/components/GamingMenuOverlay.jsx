import { RxCross2 } from "react-icons/rx";
import gsap from "gsap";
import { useRef, useEffect, useState, useLayoutEffect } from "react";

const GamingMenuOverlay = ({ isOpen, onClose, children }) => {
  const overlayRef = useRef(null);
  const [shouldRender, setShouldRender] = useState(false);
  const isAnimatingRef = useRef(false);

  // Calculate the center point (menu button position - RxHamburgerMenu)
  const getCircleCenter = () => {
    if (typeof window === 'undefined') return { x: '50%', y: 'calc(100% - 52px)' };
    // Menu button is at bottom-8 (32px) with height h-10 (40px)
    // Center of button = 32px + 20px = 52px from bottom
    return { x: '50%', y: 'calc(100% - 52px)' };
  };

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
    }
  }, [isOpen]);

  // Handle opening animation - circle expanding from menu button
  useLayoutEffect(() => {
    if (isOpen && shouldRender && overlayRef.current && !isAnimatingRef.current) {
      isAnimatingRef.current = true;
      const element = overlayRef.current;
      const center = getCircleCenter(); // Use menu button position
      
      // Calculate the maximum radius needed to cover the entire screen
      const maxRadius = Math.sqrt(
        Math.pow(window.innerWidth, 2) + Math.pow(window.innerHeight, 2)
      );
      
      // Set initial state - circle at 0 radius at menu button position
      gsap.set(element, {
        clipPath: `circle(0% at ${center.x} ${center.y})`,
        opacity: 1
      });
      
      // Animate circle expanding from menu button
      gsap.to(element, {
        clipPath: `circle(${maxRadius}px at ${center.x} ${center.y})`,
        duration: 1.5,
        ease: "power3.out",
        onComplete: () => {
          isAnimatingRef.current = false;
        }
      });
    }
  }, [isOpen, shouldRender]);

  // Handle closing animation - circle shrinking to menu button
  useEffect(() => {
    if (!isOpen && overlayRef.current && shouldRender) {
      isAnimatingRef.current = true;
      const element = overlayRef.current;
      const center = getCircleCenter(); // Use menu button position
      
      // Animate circle shrinking to menu button position
      gsap.to(element, {
        clipPath: `circle(0% at ${center.x} ${center.y})`,
        duration: 1,
        ease: "power3.out",
        onComplete: () => {
          setShouldRender(false);
          isAnimatingRef.current = false;
        }
      });
    }
  }, [isOpen, shouldRender]);

  if (!shouldRender) return null;

  return (
    <div 
      ref={overlayRef}
      className="gaming-menu-overlay fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex flex-col"
    >

      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute left-6 top-6 text-white text-3xl"
      >
        <RxCross2 />
      </button>

      {/* Custom Content */}
      <div className="flex-1 flex justify-center items-center text-white">
        {children}
      </div>
    </div>
  );
};

export default GamingMenuOverlay;

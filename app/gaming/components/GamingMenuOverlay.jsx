import { RxCross2 } from "react-icons/rx";
import gsap from "gsap";
import { useRef, useEffect, useState, useLayoutEffect } from "react";

const GamingMenuOverlay = ({ isOpen, onClose, children }) => {
  const overlayRef = useRef(null);
  const [shouldRender, setShouldRender] = useState(false);
  const isAnimatingRef = useRef(false);

  // Calculate the center point (bottom center where menu button is)
  const getCircleCenter = () => {
    if (typeof window === 'undefined') return { x: '50%', y: '100%' };
    return { x: '50%', y: '100%' }; // Bottom center
  };

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
    }
  }, [isOpen]);

  // Handle opening animation - circle expanding
  useLayoutEffect(() => {
    if (isOpen && shouldRender && overlayRef.current && !isAnimatingRef.current) {
      isAnimatingRef.current = true;
      const element = overlayRef.current;
      const center = getCircleCenter();
      
      // Calculate the maximum radius needed to cover the entire screen
      const maxRadius = Math.sqrt(
        Math.pow(window.innerWidth, 2) + Math.pow(window.innerHeight, 2)
      );
      
      // Set initial state - circle at 0 radius
      gsap.set(element, {
        clipPath: `circle(0% at ${center.x} ${center.y})`,
        opacity: 1
      });
      
      // Animate circle expanding
      gsap.to(element, {
        clipPath: `circle(${maxRadius}px at ${center.x} ${center.y})`,
        duration: 1,
        ease: "power3.out",
        onComplete: () => {
          isAnimatingRef.current = false;
        }
      });
    }
  }, [isOpen, shouldRender]);

  // Handle closing animation - circle shrinking
  useEffect(() => {
    if (!isOpen && overlayRef.current && shouldRender) {
      isAnimatingRef.current = true;
      const element = overlayRef.current;
      const center = getCircleCenter();
      
      // Calculate the maximum radius
      const maxRadius = Math.sqrt(
        Math.pow(window.innerWidth, 2) + Math.pow(window.innerHeight, 2)
      );
      
      // Animate circle shrinking
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

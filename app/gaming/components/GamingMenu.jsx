'use client'

import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import GamingMenuOverlay from "./GamingMenuOverlay";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Link from "next/link";

const GamingMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Main Menu', icon: 'home-sharp', href: '/' },
    { label: 'Lobby', icon: 'game-controller-sharp', href: '/gaming' },
    { label: 'Mates', icon: 'code-sharp', href: '/gaming/mates' },
    { label: 'About', icon: 'person-sharp', href: '/gaming/about' },
    { label: 'Gallery', icon: 'layers-sharp', href: '/gaming/gallery' },
    // { label: 'Socials', icon: 'mail-sharp', href: '/gaming/socials' },
  ];

  useGSAP(()=>{
    gsap.from('.gaming-hero-menu',{
      opacity: 0,
      yPercent: 60,
      duration: 0.7,
      stagger: 0.06,
      delay: 1.5,
    })
  })


  return (
    <>
      {/* The small bottom menu button - KEEPING YOUR EXISTING BUTTON */}
      <main className="absolute bottom-8 left-1/2 -translate-x-1/2 gaming-hero-menu">
      
        <div
          className='flex justify-end items-center h-10 w-28 bg-amber-50 rounded-3xl cursor-pointer'
          onClick={() => setMenuOpen(true)}
        >
          <span className="mr-2 text-black">Menu</span>

          <div className='relative flex justify-center items-center mr-2 bg-[#4a4a4a] h-9 w-9 rounded-full text-white'>
            <RxHamburgerMenu />
          </div>
        </div>
      </main>

      {/* Fullscreen popup overlay with circular menu */}
      <GamingMenuOverlay 
        isOpen={menuOpen} 
        onClose={() => setMenuOpen(false)}
        menuItems={menuItems}
      />
    </>
  );
};

export default GamingMenu;

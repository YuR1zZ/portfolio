'use client'

import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import GamingMenuOverlay from "./GamingMenuOverlay";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const GamingMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

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
      {/* The small bottom menu button */}
      <main className="absolute bottom-8 left-1/2 -translate-x-1/2 gaming-hero-menu">
        <div
          className='flex justify-end items-center h-10 w-28 bg-white rounded-3xl cursor-pointer'
          onClick={() => setMenuOpen(true)}
        >
          <span className="mr-2 text-black">Menu</span>

          <div className='relative flex justify-center items-center mr-2 bg-[#4a4a4a] h-9 w-9 rounded-full text-white'>
            <RxHamburgerMenu />
          </div>
        </div>
      </main>

      {/* Fullscreen popup overlay */}
      <GamingMenuOverlay isOpen={menuOpen} onClose={() => setMenuOpen(false)}>
        <div className="circular-menu">
          <div className="joystick">
            <ion-icon name='grid-sharp' class='center-icon center-main'></ion-icon>
            <ion-icon name='chevron-up-sharp' class='center-icon center-up'></ion-icon>
            <ion-icon name='chevron-down-sharp' class='center-icon center-down'></ion-icon>
            <ion-icon name='chevron-back-sharp' class='center-icon center-left'></ion-icon>
            <ion-icon name='chevron-forward-sharp' class='center-icon center-right'></ion-icon>
          </div>
        </div>
      </GamingMenuOverlay>
    </>
  );
};

export default GamingMenu;

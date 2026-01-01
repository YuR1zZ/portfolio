'use client'


import GamingHeader from "./components/GamingHeader"
import GamingMenu from "./components/GamingMenu"
import GamingPageTransition from "./components/GamingPageTransition"

export default function GamingLayout({ children }) {
  return (
    <GamingPageTransition>
      <GamingHeader />
      {children}
      <GamingMenu />
    </GamingPageTransition>
  )
}
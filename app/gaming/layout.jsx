'use client'

import PageTransition from "../components/ui/GamingPageTransition1"
import GamingPageTransition from "./components/GamingPageTransition"

export default function CodingLayout({ children }) {
  return (
    <GamingPageTransition>
      {children}
    </GamingPageTransition>
  )
}
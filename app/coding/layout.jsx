'use client'

import PageTransition from './components/CodingPageTransition'

export default function CodingLayout({ children }) {
  return (
    <PageTransition>
      {children}
    </PageTransition>
  )
}

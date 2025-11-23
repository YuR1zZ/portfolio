'use client'

import CodingHeader from './components/CodingHeader'
import PageTransition from './components/CodingPageTransition'

export default function CodingLayout({ children }) {
  return (
    <PageTransition>
        <CodingHeader />
      {children}
    </PageTransition>
  )
}
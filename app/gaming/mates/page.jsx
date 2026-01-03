'use client'

import gsap from "gsap"
import { useEffect } from "react"
import slides from "@/constants"

const page = () => {

  useEffect(() => {
    const totalSlides = slides.length;
    let currentSlide = 1;

    let isAnimating = false
    let scrollAllowed = true
    let lastScrollTime = 0

    const createSlide = (slideIndex) => {
      const slideData = slides[slideIndex - 1]

      const slide = document.createElement('div')
      slide.className = 'slide'

      const slideHeader = document.createElement('div')
      slideHeader.className = 'slide-header'

      const slideTitle = document.createElement('div')
      slideTitle.className = 'slide-title'
      const h1 = document.createElement('h1')
      h1.textContent = slideData.slideTitle
      slideTitle.appendChild(h1);

      if (slideData.subTitle) {
        const h2 = document.createElement('h2')
        h2.className = 'slide-subtitle'
        h2.textContent = slideData.subTitle
        slideTitle.appendChild(h2);
      }

      const slideDescription = document.createElement('div')
      slideDescription.className = 'slide-description'
      const p = document.createElement('p')
      p.textContent = slideData.slideDescription
      slideDescription.appendChild(p);

      const slideLink = document.createElement('div')
      slideLink.className = 'slide-link'
      const a = document.createElement('a')
      a.href = slideData.slideUrl
      a.textContent = 'Steam Profile'
      slideLink.appendChild(a);

      slideHeader.appendChild(slideTitle);
      slideHeader.appendChild(slideDescription);

      const slideInfo = document.createElement('div')
      slideInfo.className = 'slide-info'

      const slideIndexWrapper = document.createElement('div')
      slideIndexWrapper.className = 'slide-index-wrapper'
      const slideIndexCopy = document.createElement('p')
      slideIndexCopy.textContent = slideIndex.toString().padStart(2, '0')
      const slideIndexSeperator = document.createElement('p')
      slideIndexSeperator.textContent = '/'
      const slidesTotalCount = document.createElement('p')
      slidesTotalCount.textContent = totalSlides.toString().padStart(2, '0')

      slideIndexWrapper.appendChild(slideIndexCopy)
      slideIndexWrapper.appendChild(slideIndexSeperator)
      slideIndexWrapper.appendChild(slidesTotalCount)

      slideInfo.appendChild(slideIndexWrapper)
      slideInfo.appendChild(slideLink)
      slideInfo.appendChild(slideLink)

      slide.appendChild(slideHeader)
      slide.appendChild(slideInfo)

      return slide;
    }

    const animateSlide = (direction) => {
      if (isAnimating || !scrollAllowed) return

      isAnimating = true
      scrollAllowed = false

      const slider = document.querySelector('.slider')
      const currentSlideElement = slider.querySelector('.slide')

      if (direction === 'down') {
        currentSlide = currentSlide === totalSlides ? 1 : currentSlide + 1
      } else {
        currentSlide = currentSlide === 1 ? totalSlides : currentSlide - 1
      }

      const exitY = direction === 'down' ? '-200vh' : '200vh'
      const entryY = direction === 'down' ? '100vh' : '-100vh'
      const entryClipPath = direction === 'down' ? 'polygon(20% 20%, 80% 20%,80% 100%,20% 100%)' : 'polygon(20% 0%, 80% 0%, 80% 80%,20% 80%)'

      gsap.to(currentSlideElement, {
        scale: 0.25,
        opacity: 0,
        rotation: 30,
        y: exitY,
        duration: 2,
        ease: 'power4.inOut',
        force3d: true,
        onComplete: () => {
          currentSlideElement.remove()
        }
      })

      setTimeout(() => {
        const newSlide = createSlide(currentSlide)

        gsap.set(newSlide, {
          y: entryY,
          clipPath: entryClipPath,
          force3d: true,
        })

        slider.appendChild(newSlide);

        gsap.to(newSlide, {
          y: 0,
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
          duration: 1.5,
          ease: 'power4.out',
          force3d: true,
          onComplete: () => {
            isAnimating = false;
            setTimeout(() => {
              scrollAllowed = true;
              lastScrollTime = Date.now()
            }, 100)
          }
        })
      }, 750)
    }

    const handleScroll = (direction) => {
      const now = Date.now();

      if (isAnimating || !scrollAllowed) return
      if (now - lastScrollTime < 1000) return

      lastScrollTime = now
      animateSlide(direction)
    }

    const handleWheel = (e) => {
      e.preventDefault();
      const direction = e.deltaY > 0 ? 'down' : 'up'
      handleScroll(direction)
    }

    let touchStartY = 0
    let isTouchActive = false

    const handleTouchStart = (e) => {
      touchStartY = e.touches[0].clientY
      isTouchActive = true
    }

    const handleTouchMove = (e) => {
      e.preventDefault()
      if (!isTouchActive || isAnimating || !scrollAllowed) return

      const touchCurrentY = e.touches[0].clientY;
      const difference = touchStartY - touchCurrentY

      if (Math.abs(difference) > 50) {
        isTouchActive = false
        const direction = difference > 0 ? 'down' : 'up'
        handleScroll(direction)
      }
    }

    const handleTouchEnd = () => {
      isTouchActive = false
    }

    window.addEventListener('wheel', handleWheel, { passive: false })
    window.addEventListener('touchstart', handleTouchStart, { passive: false })
    window.addEventListener('touchmove', handleTouchMove, { passive: false })
    window.addEventListener('touchend', handleTouchEnd)

    return () => {
      window.removeEventListener('wheel', handleWheel)
      window.removeEventListener('touchstart', handleTouchStart)
      window.removeEventListener('touchmove', handleTouchMove)
      window.removeEventListener('touchend', handleTouchEnd)
    }
  }, []);

  return (
    <main>
      <div className="slider">
        <div className="slide">
          <div className="slide-header">
            <div className="slide-title">
              <h1>Emad soltani</h1>
              <h2 className="slide-subtitle">Great Rifler</h2>
            </div>
            <div className="slide-description">
              <p>bro is the best rifler i've ever seen (for enemy team).when bro spray i can hear the birds scream. ngl he's good with AWP like shoot close with awp (misses) and long with pistol(also miss). oh man i love playing with him especially when we're in maps except dd2 and mirage. only good thing about bro is his utility usage(0% use - 100% spend money on utils)</p>
            </div>
          </div>
          <div className="slide-info">
            <div className="slide-index-wrapper">
              <p>01</p>
              <p>/</p>
              <p>05</p>
            </div>
            <div className="slide-link">
              <a href="https://steamcommunity.com/id/YuR1isHere/">Steam Profile</a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default page

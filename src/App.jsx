import React, { useState, useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from "@gsap/react";

export const App = () => {
  const [showContent, setshowContent] = useState(false)
  const imagesDivRef = useRef(null)

  useGSAP(() => {
    const t2 = gsap.timeline({
      onComplete: () => setshowContent(true),
    })
    t2.to('.vi-mask-group', {
      rotate: 10,
      duration: 2,
      ease: 'power4.easeInOut',
      transformOrigin: '50% 50%',
    }).to('.vi-mask-group', {
      scale: 10,
      duration: 2,
      delay: -1.8,
      ease: 'expo.easeInOut',
      transformOrigin: '50% 50%',
      opacity: 0,
    })
  }, [])

  return (
    <>
      {/* Show loader only when showContent is false */}
      {!showContent && (
        <div className='svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]'>
          <svg viewBox='0 0 800 600' className='w-full h-full' preserveAspectRatio='xMidYMid slice'>
            <defs>
              <mask id='viMask'>
                <rect width='100%' height='100%' fill='black' />
                <g className='vi-mask-group'>
                  <text
                    x='50%'
                    y='50%'
                    fontSize='250'
                    textAnchor='middle'
                    fill='white'
                    dominantBaseline='middle'
                    fontFamily='Arial Black'
                  >
                    44
                  </text>
                </g>
              </mask>
            </defs>
            <rect width='800' height='600' fill='white' mask='url(#viMask)' />
          </svg>
        </div>
      )}

      {showContent && (
        <div className='main w-full'>
          <div className="landing w-full h-screen bg-black relative overflow-hidden">
            <div
              ref={imagesDivRef}
              className="imagesdiv relative overflow-hidden w-full h-full"
            >
              {/* ✅ Make sure this is in /public folder */}
              <img
                className="absolute top-0 left-0 w-full h-full object-cover"
                src="./imagebg.png"
                alt="bg"
              />
              <div className="text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                <h1 className="absolute bottom-60 text-6xl md:text-9xl bold leading-none">44</h1>
              </div>
              <img className='absolute -bottom-45 left-1/2 -translate-x-1/2 w-[810px] md:w-[250px] lg:w-[950px] transition-all duration-500 ease-in-out z-10'
              src='./Car.png'
              alt='Car'
              />
               <img className='absolute -bottom-30 left-1/2 -translate-x-1/3 w-[510px] md:w-[250px] lg:w-[570px] transition-all duration-500 ease-in-out'
              src='driver.png'
              alt='Car'
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default App

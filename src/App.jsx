import React, { useEffect } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from "@gsap/react";
export const App = () => {
  useGSAP(() => {
  const t2= gsap.timeline()
  t2.to('.vi-mask-group', {
    rotate: 10,
    duration: 2,
    ease: 'power4.easeInOut',
    transformOrigin: '50% 50%',
  })
    .to('.vi-mask-group', {
      scale: 10,
      duration: 2,
      delay: -1.8,
      ease: 'expo.easeInOut',
      transformOrigin: '50% 50%',
      opacity: 0,
    })
  },[]);
  return (

    <>
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
    </>
  )
}

export default App
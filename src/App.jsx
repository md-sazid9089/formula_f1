import React, { useState, useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from "@gsap/react";

export const App = () => {
  const [showContent, setshowContent] = useState(false)
  const imagesDivRef = useRef(null)
  useEffect(() => {
    if (!showContent) return;

    const imagesDiv = imagesDivRef.current;
    if (!imagesDiv) return;
    const bgImg = imagesDiv.querySelector('img[src="./imagebg.png"]');

    if (!bgImg) return;
    const maxTranslate = 15;

    function onMouseMove(e) {
      const rect = imagesDiv.getBoundingClientRect();
      const relX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const relY = ((e.clientY - rect.top) / rect.height) * 2 - 1;
      gsap.to(bgImg, {
        x: relX * maxTranslate,
        y: relY * maxTranslate,
        duration: 0.3,
        ease: "power1.out",
      });
    }

    function onMouseLeave() {
      gsap.to(bgImg, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: "power2.out",
      });
    }

    imagesDiv.addEventListener('mousemove', onMouseMove);
    imagesDiv.addEventListener('mouseleave', onMouseLeave);

    return () => {
      imagesDiv.removeEventListener('mousemove', onMouseMove);
      imagesDiv.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [showContent]);
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
              <img
                className="absolute top-0 left-0 w-full h-full object-cover"
                src="./imagebg.png"
                alt="bg"
              />
               <h1 className="absolute top-1/2 left-1/2 -translate-x-99 -translate-y-1/2 text-white text-[550px] font-extrabold skew-x-[-10] tracking-tight leading-none z-0 pointer-events-none select-none">
                44
              </h1>

              
              <img
                className='absolute -bottom-40 left-1/2 -translate-x-1/2 w-[810px] md:w-[250px] lg:w-[950px] transition-all duration-500 ease-in-out z-20'
                src='./Car.png'
                alt='Car'
              />
              <img
                className='absolute -bottom-5 left-1/2 -translate-x-1/2 w-[410px] md:w-[250px] lg:w-[460px] transition-all duration-500 ease-in-out z-10'
                src='./driver.png'
                alt='Driver'
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default App

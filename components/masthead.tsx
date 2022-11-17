import React, {useRef, useContext, useState, useCallback} from "react";
import Image from "next/image";
import { ScrollContext } from "./scroll-observer";

const Masthead: React.FC = ( ) => {
    const refContainer = useRef<HTMLDivElement>(null)
    const { scrollY } = useContext(ScrollContext)

    let progress = 0

    const { current: elContainer } = refContainer
    if (elContainer) {
        progress = Math.min(1, scrollY / elContainer.clientHeight)
    }

    return (
        <div 
            ref={refContainer}
            className="min-h-screen flex flex-col items-center justify-center sticky top-0 -z-10"
            style={{
                transform: `translateY(-${progress * 20}vh)`
            }}
            >
            <video autoPlay loop muted playsInline className='absolute w-full h-full object-cover'>
                <source src="/masthead_bg.mp4" type="video/mp4; codecs-hvc1"/>
                <source src="/masthead_bg.webm" type="video/webm; codecs-vp9"/>
            </video>
            <div className='p-12 font-bold z-10 text-white drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] text-center flex-1 flex items center justify-center flex-col'>
                <h1 className='mb-6 text-4xl xl:text-5xl'>World Roleplay</h1>
                <h2 className='mb-2 text-2xl xl:text-3xl tracking-tight'>
                    <span>Your Story,</span>{' '}<span>Your Way.</span>
                </h2>
            </div>
        </div>
    )
}

export default Masthead
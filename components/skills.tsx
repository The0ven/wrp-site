import React, { useContext, useRef } from "react";
import s from '../styles/skills.module.css'
import { ScrollContext } from "./scroll-observer";

const opacityForBlock = (sectionProgress: number, blockNo: number) => {
    const progress = sectionProgress - blockNo
    if (progress > 0 && progress < 1) return 1
    return 0.2
}

const Skills: React.FC = () => {
    const { scrollY } = useContext(ScrollContext)
    const refContainer = useRef<HTMLDivElement>(null)

    const numOfPages = 3
    let progress = 0

    const { current: elContainer } = refContainer
    if (elContainer) {
        const { clientHeight, offsetTop } = elContainer
        const screenH = window.innerHeight
        const halfH = screenH / 2
        const percentY = Math.min(clientHeight + halfH, Math.max(-screenH, scrollY - offsetTop) + halfH) / clientHeight
        progress = Math.min(numOfPages - 0.5, Math.max(0.5, percentY * numOfPages))
    }

    return (
        <div ref={refContainer} className="bg-black text-white">
            <div className="min-h-screen max-w-5-xl mx-auto px-10 lg:px-20 py-24 md:py-28 lg:py-36 flex flex-col justify-center items-center text-4xl md:text-6xl lg:text-7xl tracking-tight font-semibold">
                <div className='leading-[1.15]'>
                    <div className={s.skillText} style={{
                        opacity: opacityForBlock(progress, 0)
                    }}>We know roleplay.</div>
                    <span className={`${s.skillText} inline-block after:content-['_']`} style={{opacity: opacityForBlock(progress, 1)}}>
                        Our server has been operational since 2019 and over the years we have plaid host to over 
                        <strong>
                            30 seasons
                        </strong> 
                        of roleplay.
                    </span>
                    <span className={`${s.skillText} inline-block`} style={{opacity: opacityForBlock(progress, 2)}}>
                        Over the years our server has grown to over 
                        <strong>
                            200 members
                        </strong> 
                        while constantly improving the community and roleplay experience.
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Skills 
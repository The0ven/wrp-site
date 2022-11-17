import Image from 'next/image'
import React from 'react'
import { Tile, TileBackground, TileContent, TileWrapper } from './tile'
import { WorkBackground, WorkContainer, WorkLeft, WorkRight } from './work'

const Works = () => (
    <TileWrapper numOfPages={3}>
        <TileBackground>
            <WorkBackground />
        </TileBackground> 
        <TileContent>
            <Tile 
                page={0} 
                renderContent={({progress}) => (
                    <WorkContainer>
                        <WorkLeft progress={progress}>
                            <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                                Bello Gallico: 
                            </div>
                            <div>1848AD-1887AD</div>
                        </WorkLeft>
                        <WorkRight progress={progress}>
                            <Image
                            src="/Bello_1.png"
                            layout="responsive"
                            width={5616}
                            height={2161}
                            alt="BG_1"
                            />
                            <Image
                            src="/Bello_2.png"
                            layout="responsive"
                            width={5616}
                            height={2161}
                            alt="BG_1"
                            />
                        </WorkRight>
                    </WorkContainer>
                )
            }></Tile>
        </TileContent>
        <TileContent>
            <Tile 
                page={1} 
                renderContent={({progress}) => (
                    <WorkContainer>
                        <WorkLeft progress={progress}>
                            <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                                Hegemony Lost: 
                            </div>
                            <div>1848AD-1969AD</div>
                        </WorkLeft>
                        <WorkRight progress={progress}>
                            <Image
                            src="/Heg_1.png"
                            layout="responsive"
                            width={5616}
                            height={2161}
                            alt="BG_1"
                            />
                            <Image
                            src="/Heg_2.png"
                            layout="responsive"
                            width={5616}
                            height={2161}
                            alt="BG_1"
                            />
                        </WorkRight>
                    </WorkContainer>
                )
            }></Tile>
        </TileContent>
        <TileContent>
            <Tile 
                page={2} 
                renderContent={({progress}) => (
                    <WorkContainer>
                        <WorkLeft progress={progress}>
                            <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                                Second Genesis: 
                            </div>
                            <div>2250AD-2322AD</div>
                        </WorkLeft>
                        <WorkRight progress={progress}>
                            <Image
                            src="/SecGen_1.png"
                            layout="responsive"
                            width={4972}
                            height={2517}
                            alt="BG_1"
                            />
                            <Image
                            src="/SecGen_2.png"
                            layout="responsive"
                            width={8192}
                            height={4096}
                            alt="BG_1"
                            />
                        </WorkRight>
                    </WorkContainer>
                )
            }></Tile>
        </TileContent>
    </TileWrapper>
)

export default Works
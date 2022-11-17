import React from "react";
import Member from "./member";

const AboutUs: React.FC = () => {
    return <section className={`flex flex-col bg-slate-100 py-20 text-3xl md:text-4xl`}>
        <div className="container mx-auto px-11 ">
            <p className="leading-tight max-w-5xl mx-auto text-4xl tracking-tight">
                <strong>A sandbox for stories we tell together.</strong>
                <br/>Our expert staff will help you to curate your experience and guide you through every step of the roleplay process.
            </p>
        </div>
            <div className='container mx-auto px-11 text-center mt-28'>
                <h2>Our Team</h2>
                <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 lg:gap-20">
                    <Member id="oven" name="TheOven" color="sky-600"/>
                    <Member id="neighbour" name="Neighbour" color="yellow-500"/>
                    <Member id="hue" name="Hueoslavia" color="red-600"/>
                    <Member id="earthly" name="Earthly" color="red-600"/>
                    <Member id="paladin" name="Neo-Paladin" color="green-700"/>
                    <Member id="mlc" name="MLC" color="green-500"/>
                    <Member id="cow" name="DeathCow" color="green-500"/>
                    <Member id="howard" name="Howard" color="green-500"/>
                    <Member id="ant" name="Ant" color="green-500"/>
                    <Member id="alt" name="Breadboy" color="slate-500"/>
                    <Member id="lona" name="Lonathan" color="slate-500"/>
                </div>
            </div>
        </section>
}

export default AboutUs
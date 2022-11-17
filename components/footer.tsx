import React from "react";

const Footer: React.FC = () => {
    return (
        <footer className="flex flex-1 p-8 border-t-2 border-slate-300 justify-center items-center">
            <div className="grid grid-cols-2">
                <div className="flex px-10">
                    <a className="text-xl underline" href="https://world-roleplay.fandom.com/wiki/World_Roleplay_Wiki">
                        Fandom
                    </a>
                </div>
                <div className="flex px-10">
                    <a className="text-xl underline" href="https://discord.gg/TcjEpYg6mD">
                        Discord
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
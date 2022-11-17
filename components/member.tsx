import React from "react";
import Image from "next/image";

interface Props {
    id: string
    name:string
    color: string
}

const Member: React.FC<Props> = ({ id, name, color}) => (
    <div>
        <div className="rounded-full overflow-hidden">
            <Image src={`/pfp/${id}.png`} alt={name} width={1000} height={1000}/>
        </div>
        <div className={`text-2xl xl:text-3xl ${color}`}>{name}</div>
    </div>
)

export default Member
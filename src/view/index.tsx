import React from "react";
import { useGlobal } from '../context/GlobalContext';

export default function Home(params: React.FC) {
    const { text } = useGlobal();
    return (
        <div className="text-3xl font-bold underline flex items-center justify-center h-full" > {text}
        </div>
    )
}

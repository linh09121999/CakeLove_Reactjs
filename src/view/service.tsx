import React from "react";
import { useGlobal } from '../context/GlobalContext';

const Service: React.FC = () => {
    const { text } = useGlobal();
    return (
        <main>
            <section className="hero-service-bg h-[600px] flex items-center justify-center relative bg-cover bg-center bg-no-reoeat">
                
            </section>
        </main>
    )
}
export default Service;
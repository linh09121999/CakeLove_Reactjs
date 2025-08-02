import React, { useState, useEffect } from "react";
import { useGlobal } from "../context/GlobalContext";

const BackToTop:React.FC = () => {
    const {iconBackToTop} = useGlobal()

    const [isVisible, setIsVisible] = useState<boolean>(false);
    useEffect(() => {

        const toggleVisibility = () => {
            if (window.pageYOffset > 200) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    // Scroll lên đầu trang
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <>
            {isVisible && (
                <button className='back-to-top p-3 shadow-lg transition-all'
                    onClick={scrollToTop}>
                    {iconBackToTop}
                </button>
            )}
        </>

    )
}

export default BackToTop;
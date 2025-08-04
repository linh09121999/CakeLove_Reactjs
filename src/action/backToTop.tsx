import React, { useState, useEffect } from "react";
import { useGlobal } from "../context/GlobalContext";

const BackToTop:React.FC = () => {
    const {icon} = useGlobal()

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
                <button className='flex fixed bottom-[24px] right-[30px] size-[56px] bg-pink-700/60  text-white rounded-full p-3 shadow-lg transition-all z-10 justify-center items-center cursor-pointer trasistion-all duration-300 hover:translate-y-[-3px]'
                    onClick={scrollToTop}>
                    {icon.iconBackToTop}
                </button>
            )}
        </>

    )
}

export default BackToTop;
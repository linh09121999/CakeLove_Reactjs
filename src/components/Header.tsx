import React from 'react';
import Nav from './nav';
import Logo from './logo';
import { useGlobal } from '../context/GlobalContext';

const Header: React.FC = () => {
    const { isMobile, icon, cart } = useGlobal();

    return (
        <header className='z-30 w-full fixed bg-white/90 '>
            <div className='mx-auto px-4 max-w-6xl'>
                <div className='relative flex items-center justify-between h-16 px-3 gap-3 before:pointer-events-none before:absolute'>
                    <Logo />
                    {isMobile == false && <Nav />}
                    <button className='flex flex-1 items-center justify-end text-pink-700 '>{icon.iconCart}</button>
                    <span className='absolute top-2 right-0 text-white bg-pink-700 text-xs rounded-full items-center text-center font-bold h-5 w-5'>{cart}</span>
                </div>
            </div>
        </header>
    )
}

export default Header
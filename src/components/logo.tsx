
import React from "react"
import { useGlobal } from '../context/GlobalContext';

const Logo: React.FC = () => {
    const {logo, nameLogo} = useGlobal();
    return (
        <div className='flex flex-1 items-center gap-2'>
            <img alt='logo' src={logo} width={32} height={32} />
            <span className='text-lg font-bold text-pink-700'>{nameLogo}</span>
        </div>
    )
}

export default Logo
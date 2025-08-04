import React from 'react';
import { useGlobal } from '../context/GlobalContext';
import { useNavigate } from 'react-router-dom';

const Nav: React.FC = () => {
    const { pages, setSelectNav, selectNav } = useGlobal();
    const navigate = useNavigate();

    return (
        <ul className='flex list-none '>
            {pages.map((page, index) => (
                <li key={page.id} className='ml-[30px]'>
                    <a onClick={() => {
                        navigate(page.path)
                        setSelectNav(index)
                    }}
                        className={`relative cursor-pointer font-semibold transiton-all duration-300 no-underline after:absolute after:bottom-[-5px] after:left-0 after:h-[2px] after:bg-pink-700 after:transistion-all after:duration-300 after:w-0 hover:after:w-full hover:text-pink-700 ${selectNav === index ? 'text-pink-700 after:w-full' : ''} `}>
                        {page.title}
                    </a>
                </li>
            ))}
        </ul>
    )
}

export default Nav;

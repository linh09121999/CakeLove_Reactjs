import React from 'react';
import { useGlobal } from '../context/GlobalContext';
import { useNavigate } from 'react-router-dom';
import { Box, colors, TextField } from '@mui/material';

const Footer: React.FC = () => {
    const { footer, setSelectNav, selectNav } = useGlobal();
    const navigate = useNavigate();

    const sxFormControl = {
        minWidth: 150,
        margin: '0px !important',
        '& .MuiFormControl-root': {
            margin: '0px !important',
        }
    }

    const sxText = {
        '& .MuiOutlinedInput-root': {
            borderRadius: "8px",
            background: "rgba(255, 255, 255, 0.9)",
            padding: '10.5px 14px',
            transition: 'all 0.3s',
            fontSize: '1rem',
            border: 'none',
        },

        '&:hover .MuiOutlinedInput-notchedOutline': {
            outline: 'none',
            background: 'white',
            boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
            border: 'none'
        },

        '& .MuiOutlinedInput-input': {
            padding: 0
        },

        '& .MuiInputBase-input': {
            color: 'black',
            paddingLeft: '14px',
        }
    }


    return (
        <footer className='bg-cover bg-center bg-no-repeat '>
            {footer.map((ft, index) => (
                <div key={index} className='mx-auto max-w-6xl text-white p-8 grid gap-10'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 items-start'>
                        {ft.intro.map((intro, id1) => (
                            <div key={id1} className='grid gap-4 '>
                                <h3 className='text-xl font-bold items-center relative after:absolute after:bottom-[-5px] after:left-0 after:h-[2px] after:w-[50px] after:bg-gradient-to-l after:from-white after:to-pink-700'>{intro.title}</h3>
                                <p>{intro.desc}</p>
                                <div className='flex gap-4'>
                                    {intro.icon.map((icon, id2) => (
                                        <a key={id2} href={icon.link} className='text-[28px] text-pink-700/70'>{icon.icon}</a>
                                    ))}
                                </div>
                            </div>
                        ))}

                        {ft.page.map((page, id1) => (
                            <div key={id1} className='grid gap-4'>
                                <h3 className='text-xl font-bold items-center relative after:absolute after:bottom-[-5px] after:left-0 after:h-[2px] after:w-[50px] after:bg-gradient-to-l after:from-white after:to-pink-700'>{page.title}</h3>
                                <ul className='list-none grid gap-4'>
                                    {page.page.map((p, id2) => (
                                        <li key={p.id}>
                                            <a onClick={() => {
                                                navigate(p.path)
                                                setSelectNav(id2)
                                            }}
                                                className={`relative cursor-pointer font-semibold transiton-all duration-300 no-underline after:absolute after:bottom-[-5px] after:left-0 after:h-[2px] after:bg-white after:transistion-all after:duration-300 after:w-0 hover:after:w-full ${selectNav === id2 ? 'after:w-full' : ''} `}>
                                                {p.title}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}

                        {ft.contact.map((contact, id1) => (
                            <div key={id1} className='grid gap-4'>
                                <h3 className='text-xl font-bold items-center relative after:absolute after:bottom-[-5px] after:left-0 after:h-[2px] after:w-[50px] after:bg-gradient-to-l after:from-white after:to-pink-700'>{contact.title}</h3>
                                <address className='grid gap-4'>
                                    {contact.content.map((ct, id2) => (
                                        <div key={id2} className='flex gap-3'>
                                            <button className='text-[21px] text-pink-700/70'>{ct.icon}</button>
                                            <span className='grid gap-2'>
                                                {ct.content.map((text, id3) => (
                                                    <p key={id3}>{text}</p>
                                                ))}
                                            </span>
                                        </div>
                                    ))}
                                </address>
                            </div>
                        ))}

                        {ft.update.map((ud, id1) => (
                            <div key={id1} className='grid gap-4'>
                                <h3 className='text-xl font-bold items-center relative after:absolute after:bottom-[-5px] after:left-0 after:h-[2px] after:w-[50px] after:bg-gradient-to-l after:from-white after:to-pink-700'>{ud.title}</h3>
                                <p>{ud.desc}</p>
                                <Box className='w-full text-black' sx={sxFormControl} size="small">
                                    <TextField className='w-full'
                                        name='update'
                                        placeholder={ud.input}
                                        sx={sxText} />
                                </Box>
                                <button type='submit' className='btn w-full bg-pink-700/70 text-white rounded-[18px]'>{ud.btn}</button>
                            </div>
                        ))}
                    </div>
                    <div className='text-center text-whiter'>
                        <p>© {ft.timeW} {ft.text}</p>
                    </div>
                </div>
            ))}
        </footer>
    )
}

export default Footer;
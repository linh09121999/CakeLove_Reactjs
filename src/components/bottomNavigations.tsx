import React, { useEffect, useState } from 'react';

import { Box, BottomNavigation, BottomNavigationAction, colors } from '@mui/material'

import { useNavigate } from 'react-router-dom';

import { useGlobal } from "../context/GlobalContext"

const BottomNavigations: React.FC = () => {
    const { pages, selectBottomNavigations, setSelectBottomNavigations, isMobile, is410 } = useGlobal()
    
    const navigate = useNavigate()
    
    const sxBox = {
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
    }

    const sxBottomNavigation = {
        position: "fixed",
        bottom: '0',
        height: '65px ',
        background: 'var(--color-white)',
        width: '100%',
        zIndex: 10,
        boxShadow: "0 -2px 10px rgba(0,0,0,0.1)", // nhẹ nhàng
        backdropFilter: "blur(10px)", // hiệu ứng mờ nền sau (nếu dùng background translucent)
    }

    const sxBottomNavigationAction = {
        minWidth: '0 !important',
        // color: 'var(--color-white)',
        fontSize: '20pt',
        padding: 0,
        "&.Mui-selected": {
            color: 'var(--color-pink)',
            transition: "all 0.3s ease",
            background: isMobile ? " rgba(255, 255, 255, 0.15)" : "transparent"
        },
        "& .MuiBottomNavigationAction-label": {
            display: "none",
        },
        "&.Mui-selected .MuiBottomNavigationAction-label": {
            fontSize: '11pt',
            display: is410 ? "none" : "block",
            // display: 'block',
            transition: "all 0.3s ease",
        },
    }

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setSelectBottomNavigations(newValue);
    };

    return (
        <Box sx={sxBox}>
            <BottomNavigation
                showLabels={false}
                sx={sxBottomNavigation}
                value={selectBottomNavigations}
                onChange={handleChange}
            >
                {pages.map((page) => (
                    <BottomNavigationAction
                        key={page.id}
                        label={page.title}
                        value={page.id}
                        icon={page.icon}
                        sx={sxBottomNavigationAction}
                        onClick={() => {
                            setSelectBottomNavigations(page.id)
                            navigate(page.path)
                        }}
                    >

                    </BottomNavigationAction>
                ))}
            </BottomNavigation>
        </Box>

    )
}

export default BottomNavigations;
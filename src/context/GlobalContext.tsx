import React, { createContext, useContext, useState } from "react";
import type { ReactNode, JSX } from "react";
import { useMediaQuery } from "@mui/material"
import svgLogo from "../assets/image/logo/logo.svg"

import {
    FaPlayCircle,
    FaHome,
    FaMailBulk,
    FaAngleDoubleUp,
    FaShoppingCart,
    FaInfoCircle,
    FaFacebook,
    FaInstagram,
    FaPinterest,
    FaMapMarkedAlt,
    FaPhoneAlt
} from "react-icons/fa";
import { FaSquareTwitter, FaXTwitter } from "react-icons/fa6";
import { CgMenuGridR, CgMenu } from "react-icons/cg";
import { MdMiscellaneousServices } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import { IoTime } from "react-icons/io5";

import {
    IoShieldCheckmark,
    IoClose
} from "react-icons/io5";


export interface Page {
    id: string;
    title: string;
    icon: JSX.Element;
    path: string;
}

const defaultPages: Page[] = [
    {
        id: "home",
        title: "Trang chủ",
        icon: <FaHome />,
        path: "/"
    },
    {
        id: "about",
        title: "Về chúng tôi",
        icon: <FaInfoCircle />,
        path: "/about"
    },
    {
        id: "menu",
        title: "Thực đơn",
        icon: <CgMenuGridR />,
        path: "/menu"
    },
    {
        id: "service",
        title: "Dịch vụ",
        icon: <MdMiscellaneousServices />,
        path: "/service"
    },
    {
        id: "contact",
        title: "Liên hệ",
        icon: <FaMailBulk />,
        path: "/contact"
    },
]

export interface Icon {
    iconClose: JSX.Element;
    iconCart: JSX.Element;
    iconBackToTop: JSX.Element;
    iconMenu: JSX.Element;
}

const defaultIcon: Icon = {
    iconClose: <IoClose />,
    iconCart: <FaShoppingCart className="size-[21px]" />,
    iconBackToTop: <FaAngleDoubleUp />,
    iconMenu: <CgMenu className="text-pink-700" />
}

export interface iconFooter {
    icon: JSX.Element;
    link: string,
}

const defaultIconFooter: iconFooter[] = [
    { icon: <FaFacebook />, link: "https://www.facebook.com" },
    { icon: <FaInstagram />, link: "" },
    { icon: <FaSquareTwitter />, link: "" },
    { icon: <FaPinterest />, link: "" },
]

export interface IntroFooter {
    title: string;
    desc: string;
    icon: iconFooter[]
}

const defaultIntroFooter: IntroFooter[] = [
    {
        title: "CakeLove",
        desc: "Tạo ra những kỷ niệm ngọt ngào kể từ năm 2010 với những chiếc bánh và món tráng miệng thủ công thủ công của chúng tôi được làm từ các thành phần tốt nhất.",
        icon: defaultIconFooter
    }
]

export interface ContactFooterContent {
    icon: JSX.Element;
    content: string[];
    title: string
}

const defaultContactFooterContent: ContactFooterContent[] = [
    {
        icon: <FaMapMarkedAlt />,
        content: ["Cầu Giấy, Hà Nội, Việt Nam"],
        title: "Địa chỉ"
    },
    {
        icon: <FaPhoneAlt />,
        content: ["(028) 1234 5678", " Hotline: 0901 234 567"],
        title: "Số điện thoại"
    },
    {
        icon: <FaMailBulk />,
        content: ["info@cake.love"],
        title: "Email"
    },
    {
        icon: <IoTime />,
        content: ["Thứ 2 - Thứ 6: 8:00 - 20:00", "Thứ 7 - CN: 8:00 - 22:00"],
        title: "Giờ mở cửa"
    }
]

export interface ContactFooter {
    title: string,
    content: ContactFooterContent[]
}

const defaultContactFooter: ContactFooter[] = [
    {
        title: "Liên hệ",
        content: defaultContactFooterContent
    }
]

export interface UpdateFooter {
    title: string;
    desc: string;
    input: string;
    btn: string;
}

const defaultUpdateFooter: UpdateFooter[] = [
    {
        title: "Cập nhật ngọt ngào",
        desc: "Đăng ký nhận bản tin của chúng tôi cho các sản phẩm đặc biệt theo mùa, hương vị mới và mẹo làm bánh!",
        btn: "Đăng ký ngay",
        input: "Địa chỉ email của bạn"
    }
]

export interface PageFooter{
    title: string;
    page: Page[]
}

const defaultPageFooter: PageFooter[] = [
    {
        title: "Liên kết",
        page: defaultPages
    }
]

export interface Footer {
    text: string;
    timeW: number;
    intro: IntroFooter[];
    page: PageFooter[];
    contact: ContactFooter[];
    update: UpdateFooter[];
}

const defaultFooter: Footer[] = [
    {
        text: "Cake Love. All rights reserved.",
        timeW: new Date().getFullYear(),
        intro: defaultIntroFooter,
        page: defaultPageFooter,
        contact: defaultContactFooter,
        update: defaultUpdateFooter
    }

]

export interface GlobalState {
    text: string | null;
    setText: (user: string | null) => void;
    logo: string;
    isMobile: boolean;
    is410: boolean;
    nameLogo: string;
    pages: Page[];
    setSelectNav: (index: number) => void;
    selectNav: number;
    cart: number;
    setCart: (cart: number) => void;
    icon: Icon;
    selectBottomNavigations: string;
    setSelectBottomNavigations: (value: string) => void;

    footer: Footer[];
}


const GlobalContext = createContext<GlobalState | undefined>(undefined);

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
    const [text, setText] = useState<string | null>("Hello");
    const logo = svgLogo;
    const isMobile = useMediaQuery("(max-width: 768px)");
    const is410 = useMediaQuery("(max-width: 410px)");
    const nameLogo = "CakeLove";
    const [selectNav, setSelectNav] = useState<number>(0);
    const [cart, setCart] = useState<number>(0);
    const [selectBottomNavigations, setSelectBottomNavigations] = useState<string>("home");

    const value = {
        text,
        setText,
        logo,
        isMobile,
        is410,
        nameLogo,
        icon: defaultIcon,
        pages: defaultPages,
        setSelectNav,
        selectNav,
        cart,
        setCart,
        selectBottomNavigations,
        setSelectBottomNavigations,
        footer: defaultFooter
    }

    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    );
};

// Custom hook for convenience
export const useGlobal = () => {
    const context = useContext(GlobalContext);
    if (!context) {
        throw new Error("useGlobal must be used within a GlobalProvider");
    }
    return context;
};
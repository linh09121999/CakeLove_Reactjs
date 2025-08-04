import React from "react";
import { useGlobal } from '../context/GlobalContext';

const Home: React.FC = () => {
    const { text } = useGlobal();
    return (
        <main>
            <section className="hero-home-bg min-h-screen flex items-center justify-center relative bg-cover bg-right bg-no-reoeat">
                <div className="mx-auto w-6xl text-white p-4 flex">
                    <div className="max-w-[600px] mr-auto grid grid-cols-1 gap-4">
                        <h1 className="text-[64px] font-bold">Thiên đường bánh ngọt Cake Love</h1>
                        <p className="text-[21px] text-white/70">Những chiếc bánh thơm ngon, đẹp mắt được làm từ nguyên liệu cao cấp</p>
                        <button className="btn border-sold border-[1px] border-white text-white  rounded-[18px] w-fit">Đặt bánh ngay</button>
                    </div>
                </div>
            </section>
        </main>
    )
}
export default Home;
import LOGO from "../assets/images/ampluxe.png";
import PHOTO1 from "../assets/images/projector1.webp";
import PHOTO2 from "../assets/images/panel1.jpg";
import PHOTO3 from "../assets/images/panel2.jpeg";
import PHOTO4 from "../assets/images/panel3.png";
import {Link} from "react-router-dom";
import MenuComponent from "./MenuComponent";
import { useState } from "react";

const Products = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <div className="flex flex-col font-abel">
            <header className="flex justify-between p-4 sm:p-0.5 z-40 fixed top-0 w-full bg-transparent bg-opacity-40">
                <div className="w-40 sm:w-20">
                    <Link to={"/"}>
                        <img src={LOGO} alt="Logo" className="w-full" />
                    </Link>
                </div>
                <div className="flex gap-5 h-[4.5rem] sm:h-[2rem] p-4 sm:p-2 sm:gap-2">
                    <div
                        className="flex items-center rounded-full text-base font-roboto font-normal p-6 sm:p-2 py-[0.4rem] sm:py-[0.2rem] cursor-pointer transition duration-500 ease-in-out bg-black text-white group"
                        onClick={isMenuOpen ? closeMenu : toggleMenu}
                    >
                        <span className="mr-2 sm:mr-1 text-white sm:text-[0.4rem]">MENU</span>
                        <div className={`transition-transform duration-300 flex flex-col gap-1 sm:gap-[0.1rem] ${isMenuOpen ? 'gap-[0.5px] w-2 py-10 sm:w-1 sm:py-2 sm:gap-[0.2px]' : ''}`}>
                            <span className={`block w-5 sm:w-2 h-[0.1rem] sm:h-[0.01rem] bg-white transition duration-500 ease-in-out ${isMenuOpen ? 'rotate-45' : ''}`}></span>
                            <span className={`block w-5 sm:w-2 h-[0.1rem] sm:h-[0.01rem] bg-white transition duration-500 ease-in-out ${isMenuOpen ? '-rotate-45' : ''}`}></span>
                        </div>
                    </div>

                    <Link to={"/contact"} className='sm:mt-[-0.41rem] py-[0.4rem] sm:py-[0rem]'>
                        <span className="rounded-full text-base px-3 py-2 pb-3 sm:p-1 font-roboto font-normal cursor-pointer bg-black text-white transition duration-300 ease-in-out sm:text-[0.45rem]">CONTACT</span>
                    </Link>
                </div>
            </header>

            <div className={`flex flex-col pt-40 sm:pt-5 items-center ${isMenuOpen ? 'blurred backdrop-blur-md' : ''}`}>
                <div className="py-5 pb-16 sm:pb-2">
                    <span className="text-9xl sm:text-5xl">Products</span>
                </div>
                <div className="flex gap-5 sm:gap-1 flex-wrap px-20 sm:px-8 py-10 pb-32">
                    <Link to={"/projector-screens"}>
                    <div className="flex flex-col items-center cursor-pointer">
                        <img src={PHOTO1} className="w-[26rem] sm:w-[8rem] p-2 hover:scale-95 transition duration-700 ease-in-out" alt="Projector Screen" />
                        <span className="text-4xl sm:text-base pt-10 sm:pt-2">Projector Screens</span>
                    </div>
                    </Link>
                    <Link to={"/Flat-Panel-Display"}>
                    <div className="flex flex-col items-center pt-3 cursor-pointer">
                        <img src={PHOTO2} className="w-[30rem] sm:w-[8rem] p-1 hover:scale-95 transition duration-700 ease-in-out" alt="Interactive Flat Panel Display" />
                        <span className="text-4xl sm:text-base pt-10 sm:pt-2 sm:w-4/5 sm:pl-3">Interactive Flat Panel Display</span>
                    </div>
                    </Link>
                    <Link to={"/All-In-One-LED"}>
                    <div className="flex flex-col items-center cursor-pointer">
                        <img src={PHOTO4} className="w-[26rem] sm:w-[8rem] p-2 hover:scale-95 transition duration-700 ease-in-out" alt="All-In-One LED Series" />
                        <span className="text-4xl pt-14 sm:text-base sm:pt-2">All-In-One LED Series</span>
                    </div>
                    </Link>
                    <Link to={"/Active-LED-Display"}>
                    <div className="flex flex-col items-center pt-20 sm:pt-5 sm:pl-7 cursor-pointer">
                        <img src={PHOTO3} className="w-[24rem] sm:w-[8rem] hover:scale-95 transition duration-700 ease-in-out" alt="Active LED Displays" />
                        <span className="text-4xl sm:text-base pt-10 sm:pt-2">Active LED Displays</span>
                    </div>
                    </Link>
                </div>
            </div>

            {/* Overlay and Menu Component */}
            {isMenuOpen && (
                <div className="fixed inset-0 z-30">
                    <div className="fixed inset-0 bg-black opacity-70" onClick={toggleMenu}></div>
                    <div className="relative z-50">
                        <MenuComponent />
                    </div>
                </div>
            )}
        </div>
    )
};

export default Products;
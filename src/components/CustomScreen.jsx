import LOGO from "../assets/images/ampluxe.png";
import PHOTO16 from "../assets/images/motor16.png";
import PHOTO13 from "../assets/images/motor13.png";
import PHOTO14 from "../assets/images/motor14.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import MenuComponent from "./MenuComponent";

const CustomScreen = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <div className="relative w-full h-full font-abel">
            <header className="flex justify-between p-4 sm:p-0.5 z-40 fixed top-0 w-full bg-transparent bg-opacity-40 backdrop-blur-xl">
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

            <div className={`flex flex-col items-center ${isMenuOpen ? 'blurred backdrop-blur-md' : ''}`}>
                <div className="text-8xl sm:text-5xl text-[#343531] w-3/5 text-center">
                    <span>Custom Projector Solutions</span>
                </div>
                <div className="flex flex-col items-center pt-10 gap-16">
                    <div className="text-2xl sm:text-sm uppercase px-56 sm:px-4 tracking-wide text-center">
                        <span>
                            At Ampluxe, we deliver tailored projector solutions 
                            to meet the unique needs of our clients. Our custom 
                            projectors offer exceptional performance, superior 
                            image quality, and seamless integration. Whether 
                            enhancing a corporate boardroom, creating an immersive 
                            home theater, or setting up a dynamic event display, Ampluxe 
                            has the expertise to bring your vision to life.
                        </span>
                    </div>
                    <div className="flex gap-5 sm:flex-col">
                        <img src={PHOTO16} className="w-[15rem] sm:w-[20rem] sm:h-[19rem] h-[15rem] rounded-3xl" alt="" />
                        <img src={PHOTO13} className="w-[20rem] h-[19rem] rounded-3xl" alt="" />
                        <img src={PHOTO14} className="w-[15rem] sm:w-[20rem] h-[15rem] sm:h-[19rem] rounded-3xl" alt="" />
                    </div>
                </div>
                <div className="flex flex-col items-center pt-28 gap-6 sm:gap-2">
                    <div className="text-5xl sm:text-2xl">
                        <span>Need Custom Solutions?</span>
                    </div>
                    <div className="text-xl sm:text-sm uppercase w-4/5 text-center tracking-wide">
                        <span>
                            Need custom solutions? Contact us today to discuss your unique projector needs and 
                            get a personalized quote!
                        </span>
                    </div>
                    <div className="py-20 sm:py-8">
                        <button className="text-white bg-[#292639] py-3 sm:py-1.5 px-16 sm:px-8 font-roboto rounded-full text-[0.8rem] sm:text-[0.6rem] uppercase hover:bg-[#4D4D4D] hover:scale-110 transition duration-500">Contact US</button>
                    </div>
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

export default CustomScreen;